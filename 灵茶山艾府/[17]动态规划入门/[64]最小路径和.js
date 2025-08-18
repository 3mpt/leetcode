/**
 * @param {number[][]} grid
 * @return {number}
 */
export let minPathSum = function (grid) {
  const cache = new Map()
  function fn(i, j) {
    if (i < 0 || j < 0) return Infinity
    if (i === 0 && j === 0) return grid[i][j]
    if (cache.has(`${i}-${j}`)) return cache.get(`${i}-${j}`)
    const res = Math.min(fn(i, j - 1), fn(i - 1, j)) + grid[i][j]
    cache.set(`${i}-${j}`, res)
    return res
  }
  // 入口为最后一个
  return fn(grid.length - 1, grid[grid.length - 1].length - 1)
}
