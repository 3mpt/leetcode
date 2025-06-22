/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/
 */
const findMin = function (nums) {
  let l = 0
  let r = nums.length - 2
  while (l <= r) {
    const m = Math.floor((l + r) / 2)
    // 这个题数组有个规律，最小值之前的数都是比数组最后一个元素大的，
    // 最小值之后的数都是比数组最后一个元素小的。
    // m比最右侧小，说明现在的数在最小值的右侧。就是 最小值<m<最右侧 所以r收缩。
    // m比最右侧大，说明现在的数在最小值的左侧。就是 m<最小值<最右侧 所以l收缩
    console.log('l , m , r', nums[l], nums[m], nums[r])
    if (nums[m] < nums[nums.length - 1]) {
      r = m - 1
    } else {
      l = m + 1
    }
  }
  return nums[l]
}
findMin([2, 3, 4, 5, 1])
