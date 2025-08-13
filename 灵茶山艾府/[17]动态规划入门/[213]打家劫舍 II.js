/**
 * @param {number[]} nums
 * @return {number}
 */
// export let rob = function (nums) {
//   let n = nums.length
//   return Math.max(nums[0] + rob1(nums.slice(2, n - 1)), rob1(nums.slice(1)))
// }
// function rob1(nums) {
//   let n = nums.length
//   let cache = Array(n).fill(-1)
//   function fn(i) {
//     if (i < 0) return 0

//     if (cache[i] !== -1) return cache[i]
//     return (cache[i] = Math.max(fn(i - 1), fn(i - 2) + nums[i]))
//   }
//   return fn(n - 1)
// }
/**
 * @param {number[]} nums
 * @return {number}
 */
export let rob = function (nums) {
  //  总共有n个房子,最后一个房子下标是n-1
  const n = nums.length
  return Math.max(
    rob1(nums.slice(2, n - 1)) + nums[0], //偷第1间 就不能偷最后一间 子问题就是第3间开始, 然后到n-2 slice包括 start，不包括 end
    rob1(nums.slice(1)) // 不偷第一间 就是从第2件开始偷
  )
}
function rob1(nums) {
  const n = nums.length
  const cache = new Map()
  function fn(i) {
    // 没有房子，收益是 0
    if (i < 0) return 0
    if (cache.has(i)) return cache.get(i)

    const res = Math.max(
      fn(i - 2) + nums[i], // 偷当前这间,不能偷i-1 就应该从i-2 开始偷
      fn(i - 1) // 不偷当前这间 就从i-1 继续递归
    )
    cache.set(i, res)
    return res
  }
  return fn(n - 1)
}
