/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.cn/problems/find-peak-element/
 */

const findPeakElement = function (nums) {
  // 左指针是0 开始 右指针是从nums.length-2 开始 因为最右侧那个一定是峰底
  let left = 0
  let right = nums.length - 2
  while (left <= right) {
    // 中间数
    const mid = Math.floor((left + right) / 2)
    // 如果m小于m+1 则说明处于一个上升破定型了。 m< m+1 ，左侧的可以染红
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return left
}
findPeakElement()
