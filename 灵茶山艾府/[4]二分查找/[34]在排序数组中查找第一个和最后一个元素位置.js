/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  // 4种情况 > >= < <=
  // >的情况 lowBount(nums,target+1) 可以看成是大于等于 比如说大于8 可以看成大于等于9
  // >=的情况 lowBount(nums,target)
  // <的情况 lowBount(nums,target)-1 可以看成大于等于的那个数 左边的数 小于8 可以看成大于等于8的那个数左边的数
  // <=的情况 lowBount(nums,target+1)-1 可以看成大于的那个数左边的那个数， 小于等于8 可以看成大于8的那个数左边的数
  // 开始的数是>=8的那个数
  const start = lowBound(nums, target)
  // 开始的索引是数组的长度 说明不在数组内， 或者开始的数不等于目标数
  if (start === nums.length || nums[start] !== target) {
    return [-1, -1]
  }
  const end = lowBound(nums, target + 1) - 1
  return [start, end]
}
// 二分查找
const lowBound = (nums, target) => {
  // [1,2,3,4]
  // 闭区间
  let left = 0
  let right = nums.length - 1
  // 区间不为空 继续循环
  while (left <= right) {
    // 取中位数进行判断
    const mid = Math.floor((left + right) / 2)
    // 如果比目标大，右侧这些数都是比目标大的，更换右区间
    if (nums[mid] >= target) {
      right = mid - 1
      // 如果比目标小,左侧这些数都是比目标小的,更换左区间
    } else {
      left = mid + 1
    }
  }
  // 返回 left left和right+1 是一个数
  return left
}
searchRange()
