/**
 * @param {number[][]} matrix
 * @param {number} numSelect
 * @return {number}
 */
export let maximumRows = function (matrix, numSelect) {
  let n = matrix[0].length
  let res = 0
  // 记录选中的列索引
  let path = []
  function fn(i) {
    if (i === n) {
      if (path.length === numSelect) {
        let a = fugai(path, matrix)
        res = Math.max(res, a)
      }
      //
      return
    }
    fn(i + 1)
    path.push(i)
    fn(i + 1)
    path.pop()
  }
  fn(0)
  return res
}
function fugai(arr, matrix) {
  let count = 0
  // 遍历每一行
  for (let row of matrix) {
    let ok = true
    // 再遍历每一行的值

    for (let j = 0; j < row.length; j++) {
      // 如果当前的值是1 并且不在覆盖列的名单里 则 跳过这一行的循环
      if (row[j] === 1 && !arr.includes(j)) {
        ok = false
        break
      }
    }
    if (ok) count++
  }
  return count
}
