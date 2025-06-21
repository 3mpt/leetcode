/**
 * @param {number[]} height
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
const maxArea = function (height) {
  const len = height.length
  let left = 0
  let right = len - 1
  let max = 0
  while (left < right) {
    const width = right - left
    let h
    if (height[left] < height[right]) {
      h = height[left]
      left++
    } else {
      h = height[right]
      right--
    }
    max = Math.max(max, width * h)
  }
  return max
}
