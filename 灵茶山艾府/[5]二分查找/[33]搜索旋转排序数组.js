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
    if (nums[m] === target) return m
    // 左侧数组
    if (nums[l] <= nums[m]) {
      // l<t<m
      if (nums[l] <= target && target < nums[m]) {
        // 右收缩
        r = m - 1
      } else {
        l = m + 1
      }
    } else {
      // m<t<r
      if (nums[m] < target && target <= nums[r]) {
        // 左收缩
        l = m + 1
      } else {
        r = m - 1
      }
    }
  }

  return -1
}
search()
