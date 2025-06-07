/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let currentSum = nums[0]
  let maxSum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    /**
         * 4种情况
         * 1.正+正 肯定值得加
         * 2.正数+小负数, 还是要加
         * 3.负数+正数, 不加了,不如直接用这个正数
         * 4.负数+负数,额 摆烂了,先拿后面的负数吧 
         * 如果之前都是正数就接着加, 如果之前是负数则拿最新的

         */
    currentSum = Math.max(currentSum + nums[i], nums[i])
    maxSum = Math.max(currentSum, maxSum)
  }
  return maxSum
}
