/**
 * @param {number} n
 * @return {string[][]}
 */
export let solveNQueens = function (n) {
  const ans = []
  const queens = Array(n).fill(0)
  const col = Array(n).fill(false)
  // 右上角
  const diag1 = Array(2 * n - 1).fill(false)
  // 左上角
  const diag2 = Array(2 * n - 1).fill(false)
  function fn(r) {
    if (r === n) {
      ans.push(queens.map((c) => '.'.repeat(c) + 'Q' + '.'.repeat(n - 1 - c)))

      return
    }
    for (let c = 0; c < n; c++) {
      const rc = r - c + n - 1
      if (!col[c] && !diag1[r + c] && !diag2[rc]) {
        queens[r] = c
        col[c] = diag1[r + c] = diag2[rc] = true
        fn(r + 1)
        col[c] = diag1[r + c] = diag2[rc] = false
      }
    }
  }
  fn(0)
  return ans
}
