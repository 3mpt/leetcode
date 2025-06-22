/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  if (nums[0] === target) return 0

  const end = nums[nums.length - 1]
  if (end === target) return nums.length - 1
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    const m = Math.floor((l + r) / 2)
    // 判断二分位置在哪边？
    // 二分位置在左侧
    if (nums[m] > end) {
      // 目标数字也在左侧
      if (target > end) {
        if (nums[m] < target) {
          l = m + 1
        } else {
          r = m - 1
        }
      } else {
        // 目标数字在右侧
        l = m + 1
      }
    } else {
      // 二分位置在右侧
      // 目标数字也在右侧
      if (target < end) {
        if (nums[m] < target) {
          l = m + 1
        } else {
          r = m - 1
        }
      } else {
        // 目标数字在左侧
        r = m - 1
      }
    }
  }
  if (nums[l] === target) {
    return l
  } else {
    return -1
  }
}
search()
