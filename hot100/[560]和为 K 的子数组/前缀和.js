/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export let subarraySum = function (nums, k) {
  const hash = new Map()
  hash.set(0, 1)
  let count = 0 // 出现次数
  let sum = 0 // 前缀和
  for (let current of nums) {
    sum += current
    // 如果之前存在过前缀
    if (hash.has(sum - k)) {
      // 把出现的次数累加上去
      count += hash.get(sum - k)
    }
    // 将当前前缀和存储
    hash.set(sum, (hash.get(sum) || 0) + 1)
  }
  return count
}
