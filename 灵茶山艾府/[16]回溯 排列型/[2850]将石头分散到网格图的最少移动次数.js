/**
 * @param {number[][]} grid
 * @return {number}
 */
export let minimumMoves = function (grid) {
  // =0的坐标
  let lack = []
  // >0的坐标
  let overflow = []
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      let val = grid[r][c]
      if (val === 1) continue
      if (val === 0) {
        lack.push([r, c])
        continue
      }
      for (let i = 0; i < val - 1; i++) {
        overflow.push([r, c])
      }
    }
  }
  let step = Infinity
  const used = Array(lack.length).fill(false)
  function fn(i, total) {
    const curOverflow = overflow[i]
    if (i === overflow.length) {
      step = Math.min(step, total)
      return
    }
    for (let j = 0; j < lack.length; j++) {
      if (!used[j]) {
        const curLack = lack[j]
        // 这里只分配 看有几种情况
        const dist = Math.abs(curOverflow[0] - curLack[0]) + Math.abs(curOverflow[1] - curLack[1])
        used[j] = true
        fn(i + 1, total + dist)
        used[j] = false
      }
    }
  }
  fn(0, 0)
  return step
}
