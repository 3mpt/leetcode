/**
 * @param {string} num
 * @return {boolean}
 */
export let isAdditiveNumber = function (num) {
  let n = num.length
  let path = []
  let res = false
  function fn(i) {
    let len = path.length
    // 都进行分割完毕了
    if (i === n) {
      // 当前的path 是否符合要求 默认符合 如果发现 有一例不符合直接结束
      if (len >= 3) res = true

      return
    }
    for (let j = i; j < n; j++) {
      const s = num.substring(i, j + 1)
      if (s[0] === '0' && s.length > 1) break
      const cur = Number(s)
      if (len >= 2) {
        const sum = path[len - 1] + path[len - 2]
        // 所以后面拼出的数只会更大
        if (cur < sum) continue // 太小了，继续拼接
        if (cur > sum) break // 太大了，剪枝
      }
      path.push(cur)
      fn(j + 1)
      path.pop()
      if (res) return
    }
  }
  fn(0)
  return res
}
