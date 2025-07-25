/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
export let combine = function (n, k) {
  let res = []
  let path = []
  function fn(i) {
    const d = k - path.length // 还需要选 d 个数
    if (path.length === k) {
      res.push([...path])
      return
    }
    for (let j = i; j >= d; j--) {
      path.push(j)
      fn(j - 1)
      path.pop()
    }
  }
  fn(n)
  return res
}
