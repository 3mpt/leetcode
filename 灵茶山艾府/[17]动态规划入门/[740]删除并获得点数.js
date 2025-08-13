/**
 * @param {number[]} nums
 * @return {number}
 */
export let deleteAndEarn = function (nums) {
  const max = Math.max(...nums)
  const points = new Array(max + 1).fill(0)

  // 统计每个数字的“总收益”
  for (let num of nums) {
    points[num] += num
  }

  // 相当于打家劫舍 dp[i] = max(dp[i-1], dp[i-2] + points[i])
  let dp1 = 0
  let dp2 = 0
  for (let i = 0; i <= max; i++) {
    let temp = Math.max(dp2 + points[i], dp1)
    dp2 = dp1
    dp1 = temp
  }
  return dp1
}

/**
 * @param {number[]} nums
 * @return {number}
 */
export const deleteAndEarn1 = function (nums) {
  let max = Math.max(...nums)
  let arr = Array(max + 1).fill(0)

  for (let num of nums) {
    arr[num] += num
  }
  let cache = new Map()
  // i是一个数 map.get(i) 是这个数的钱数
  function fn(i) {
    if (i < 0) return 0
    // if (arr[i] === 0) return fn(i - 1)

    if (cache.has(i)) return cache.get(i)
    const res = Math.max(
      // 选这个数 则需要从
      fn(i - 2) + arr[i],
      // 不选
      fn(i - 1)
    )
    cache.set(i, res)

    return res
  }

  return fn(max)
}
