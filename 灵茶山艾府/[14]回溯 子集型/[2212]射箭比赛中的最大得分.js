/**
 * @param {number} numArrows
 * @param {number[]} aliceArrows
 * @return {number[]}
 */
export let maximumBobPoints = function (numArrows, aliceArrows) {
  // 环的长度
  let n = 12
  let res = []
  let path = Array(12).fill(0)
  let max = 0
  // i 为第几环 射还是不射
  function fn(i, restCount) {
    if (i === n) {
      let sum = 0
      for (let j = 0; j < 12; j++) {
        if (path[j] > aliceArrows[j]) {
          sum += j
        }
      }
      if (sum > max) {
        max = sum
        res = [...path]
        // 有一些情况 子弹不一定用完了，但是分数确实最高。
        res[0] += restCount
      }
      return
    }
    fn(i + 1, restCount)
    let count = aliceArrows[i]
    let nextRestCount = restCount
    // 当前这一环 还有没有子弹了 ,如果有射几次并且还要大于aliceArrows[i]\
    if (restCount > count) {
      // 要比他多一分
      path[i] = count + 1
      nextRestCount = restCount - (count + 1)
    }
    fn(i + 1, nextRestCount)
    path[i] = 0
  }
  fn(0, numArrows)
  return res
}
