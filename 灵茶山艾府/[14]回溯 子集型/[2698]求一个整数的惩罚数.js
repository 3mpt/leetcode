/**
 * @param {number} n
 * @return {number}
 */
export let punishmentNumber = function (n) {
  let ans = []
  // 遍历每一个数
  for (let i = 1; i <= n; i++) {
    let path = []
    let squareStr = (i * i).toString()

    fn(0, path, squareStr, i, 0)
  }
  function fn(j, path, squareStr, i, curSum) {
    if (curSum > i) return
    if (j === squareStr.length) {
      // 计算每位分割的次数 要完全分割完成后加入
      // 如果和跟i一样则继续
      if (curSum === i) {
        ans.push(i * i)
      }

      return
    }
    // 参考分割回文串, 加或者不加逗号进行分割
    for (let k = j; k < squareStr.length; k++) {
      const numStr = squareStr.substring(j, k + 1)
      const num = Number(numStr)
      path.push(numStr)
      fn(k + 1, path, squareStr, i, curSum + num)
      path.pop()
    }
  }
  return [...new Set(ans)].reduce((sum, cur) => sum + cur, 0)
}
