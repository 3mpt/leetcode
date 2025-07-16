/**
 * @param {string} digits
 * @return {string[]}
 */
const mapping = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
export let letterCombinations = function (digits) {
  const len = digits.length
  if (len === 0) return []
  let res = []
  let path = Array(len)
  function fn(i) {
    if (i === len) {
      // path 是一个string[] 需要转换为string
      res.push(path.join(''))
      return
    }
    // 取digits[i]转化为对应的字母映射。
    let letters = mapping[Number(digits[i])]
    // 第1次是a 然后进递归 第2次是def枚举 然后第3次 发现长度 len 和i是一样的push到res中 然后return回来
    // 然后进入下一次for 循环接着第2次def枚举 到e 然后push.....
    for (const p of letters) {
      path[i] = p
      fn(i + 1)
    }
  }
  fn(0)
  return res
}
