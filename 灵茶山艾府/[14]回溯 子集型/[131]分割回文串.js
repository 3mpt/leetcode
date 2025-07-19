/**
 * @param {string} s
 * @return {string[][]}
 */
export let partition = function (s) {
  let n = s.length
  let res = []
  let path = []
  function fn(i) {
    // s全部切割完成了才算结束， 才能判断每一个子串是否为回文串。
    if (i === n) {
      res.push(path.slice())
      return
    }
    for (let j = i; j < n; j++) {
      if (isPalindrome(s, i, j)) {
        // 满足条件的才加入到路径中。
        path.push(s.substring(i, j + 1))
        fn(j + 1)
        path.pop()
      }
    }
  }
  fn(0)
  return res
}
const isPalindrome = function (s, left, right) {
  while (left < right) {
    if (s[left++] !== s[right--]) {
      return false
    }
  }
  return true
}
