/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// eslint-disable-next-line no-unused-vars
const threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  const len = nums.length
  const res = []
  // i + j + k = 0 =>  j+k = -i
  // 定一个 剩下两个还是按两数之和去做
  for (let i = 0; i < len - 2; i++) {
    const target = -nums[i]
    let left = i + 1
    let right = len - 1
    // 如果两个i 连续, 则跳过 当前循环
    if (i !== 0 && nums[i] === nums[i - 1]) continue
    // 如果前3个已经比0大了,不用比了 后面不可能和为0 i 是单调增的.
    if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break
    // 如果加上后两个还比零小, 给i ++
    if (nums[i] + nums[len - 1] + nums[len - 2] < 0) continue
    while (left < right) {
      const sum = nums[left] + nums[right]
      if (sum > target) {
        right--
      } else if (sum < target) {
        left++
      } else {
        res.push([nums[i], nums[left], nums[right]])
        left++
        // 如果两个 left连续, 则 再移动一次
        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }
        right--
        // 如果两个 right连续, 则 再移动一次
        while (left < right && nums[right] === nums[right + 1]) {
          right--
        }
      }
    }
  }
  return res
}
