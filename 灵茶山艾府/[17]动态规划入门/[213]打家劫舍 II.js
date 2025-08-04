/**
 * @param {number[]} nums
 * @return {number}
 */
export let rob = function (nums) {
  let n = nums.length
  return Math.max(nums[0] + rob1(nums.slice(2, n - 1)), rob1(nums.slice(1)))
}
function rob1(nums) {
  let n = nums.length
  let cache = Array(n).fill(-1)
  function fn(i) {
    if (i < 0) return 0

    if (cache[i] !== -1) return cache[i]
    return (cache[i] = Math.max(fn(i - 1), fn(i - 2) + nums[i]))
  }
  return fn(n - 1)
}
