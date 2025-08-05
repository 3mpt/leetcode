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
