/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export let combinationSum4 = function (nums, target) {
  // 想象成爬楼梯 走1 步 2步 3步
  // const arr = Array(target + 1).fill(-1)
  // function fn(i) {
  //     if (i < 1) return 1

  //     if (arr[i] !== -1) {
  //         return arr[i]
  //     }
  //     let res = 0
  //     for (let j of nums) {
  //         if (j <= i) {
  //             res += fn(i - j)
  //         }
  //     }
  //     return arr[i] = res

  // }
  // return fn(target)
  let dp = Array(target + 1).fill(0)
  // 只有1种情况 dp[0] 就是不选
  dp[0] = 1
  //  从dp[i] 开始走
  for (let i = 1; i <= target; i++) {
    for (let j of nums) {
      // j为 可选的数, 如果j比 i 大 则会超长
      if (j <= i) {
        dp[i] += dp[i - j]
      }
    }
  }
  return dp[target]
}
