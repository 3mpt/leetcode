/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// eslint-disable-next-line no-unused-vars
const twoSum = function (numbers, target) {
  const len = numbers.length
  let left = 0
  let right = len - 1
  while (left < right) {
    const sum = numbers[left] + numbers[right]
    // 两边相加比目标小 ，移动左指针
    if (sum < target) {
      left++
    } else if (sum > target) {
      right--
    } else {
      return [left + 1, right + 1]
    }
  }
}
