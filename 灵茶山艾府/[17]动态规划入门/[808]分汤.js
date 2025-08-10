/**
 * @param {number} n
 * @return {number}
 */
export let soupServings = function (n) {
  if (n >= 4451) return 1
  const memo = new Map()
  function fn(a, b) {
    if (a <= 0 && b <= 0) return 0.5
    if (a <= 0) return 1.0
    if (b <= 0) return 0.0
    const key = `${a},${b}`
    if (memo.has(key)) return memo.get(key)
    const res = (fn(a - 100, b) + fn(a - 75, b - 25) + fn(a - 50, b - 50) + fn(a - 25, b - 75)) / 4
    memo.set(key, res)
    return res
  }
  return fn(n, n)
}
