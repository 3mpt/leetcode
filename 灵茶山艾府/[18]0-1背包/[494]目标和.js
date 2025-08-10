/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export function findTargetSumWays(nums, target) {
  // s 为需要找的子集和
  let s = nums.reduce((s, x) => s + x) - target
  // 整数 且 为偶数
  if (s < 0 || s % 2) return 0
  s /= 2
  //
  const f = Array(s + 1).fill(0)
  f[0] = 1
  for (const x of nums) {
    // 0-1 背包问题应该倒序
    for (let j = s; j >= x; j--) {
      f[j] += f[j - x]
    }
  }
  return f[s]
}
