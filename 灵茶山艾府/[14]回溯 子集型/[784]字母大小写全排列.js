/**
 * @param {string} s
 * @return {string[]}
 */
export let letterCasePermutation = function (s) {
  let n = s.length
  let res = []
  let path = Array(n)
  function fn(i) {
    if (i === n) {
      res.push(path.join(''))
      return
    }
    const c = s[i]
    if (/[a-zA-z]/.test(c)) {
      path[i] = c.toUpperCase()
      fn(i + 1)
      path[i] = c.toLowerCase()
      fn(i + 1)
    } else {
      path[i] = c
      fn(i + 1)
    }
  }
  fn(0)
  return res
}
