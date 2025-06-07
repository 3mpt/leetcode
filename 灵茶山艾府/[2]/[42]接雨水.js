/**
 * @param {number[]} height
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
const trap = function (height) {
  let res = 0
  let left = 0
  let right = height.length - 1
  let pre = 0
  let beh = 0
  while (left <= right) {
    pre = Math.max(pre, height[left])
    beh = Math.max(beh, height[right])
    if (pre < beh) {
      res += pre - height[left]
      left++
    } else {
      res += beh - height[right]
      right--
    }
  }
  return res
}
