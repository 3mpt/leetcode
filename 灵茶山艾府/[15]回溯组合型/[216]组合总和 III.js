/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
export let combinationSum3 = function (k, n) {
  let res = []
  let path = []
  function fn(i, t) {
    let m = path.length
    let d = k - m
    if (t < 0 || t > ((2 * i - d + 1) * d) / 2) return
    // path的长度 等于k长度
    if (m === k) {
      res.push([...path])
      return
    }
    for (let j = i; j >= d; j--) {
      path.push(j)
      fn(j - 1, t - j)
      path.pop()
    }
  }
  fn(9, n)
  return res
}
