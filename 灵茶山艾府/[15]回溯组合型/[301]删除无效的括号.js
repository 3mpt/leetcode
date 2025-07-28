/**
 * @param {string} s
 * @return {string[]}
 */
export let removeInvalidParentheses = function (s) {
  // const a = isVaild(s)
  // console.log(a)

  // 删或不删 删n次 如果找到了 直接返回res 如果没找到n++
  let res = new Set()
  let maxLen = -1
  function fn(i, path) {
    let len = path.length
    if (i === s.length) {
      if (isValid(path)) {
        if (len > maxLen) {
          res.clear()
          maxLen = len
        }
        // 如果path长度等于maxLen push
        if (len === maxLen) {
          res.add(path)
        }
      }
      // 如果path长度大于maxLen 清空res

      return
    }
    let ch = s[i]
    if (ch === '(' || ch === ')') {
      fn(i + 1, path)
    }
    fn(i + 1, path + ch)
  }
  fn(0, '')

  return [...res]
}
function isValid(str) {
  let count = 0
  for (let ch of str) {
    if (ch === '(') count++
    else if (ch === ')') {
      if (count === 0) return false
      count--
    }
  }
  return count === 0
}
