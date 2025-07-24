/**
 * @param {string} s
 * @return {string[]}
 */
export let restoreIpAddresses = function (s) {
  let n = s.length
  let res = []
  let path = []
  function fn(i) {
    let len = path.length
    // if (len > 4) return
    if (i === n) {
      if (len === 4) {
        res.push(path.join('.'))
        // console.log(path)
      }

      return
    }
    for (let j = i; j < n; j++) {
      let sub = s.substring(i, j + 1)
      //  去除前导0 限制3位数情况 3位数开头是大于2的情况 大于255的情况
      if (len === 4 || (sub.length !== 1 && sub[0] === '0') || sub.length > 3 || Number(sub) > 255) break

      path.push(sub)
      fn(j + 1)
      path.pop()
    }
  }
  fn(0)
  return res
}
