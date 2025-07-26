/**
 * @param {number} n
 * @return {string[]}
 */
export let generateParenthesis = function (n) {
  let m = 2 * n
  let res = []
  let path = []
  function fn(i, open) {
    // i为已填入括号数量
    // 已填入的数量等于需要填入的括号数量
    if (i === m) {
      res.push(path.join(''))
    }
    //  左括号个数小于n 表示还可以再选左括号
    if (open < n) {
      path.push('(')
      fn(i + 1, open + 1)
      path.pop()
    }
    // 已填入的括号数量, 减去填入的左括号数量  就是已填入的右括号数量
    // 右括号数量如果小于左括号 说明可以继续填入右括号
    if (i - open < open) {
      path.push(')')
      fn(i + 1, open)
      path.pop()
    }
  }
  fn(0, 0)
  return res
}
