/**
 * @param {number} n
 * @return {number}
 */
export let countNumbersWithUniqueDigits = function (n) {
  let res = 0

  // 存储0-9
  const visited = Array(10).fill(false)
  // i 对应位数
  function fn(i) {
    if (i > n) return
    if (i > 0) res++
    for (let j = 0; j <= 9; j++) {
      if (i === 0 && j === 0) continue
      if (!visited[j]) {
        visited[j] = true
        fn(i + 1)

        visited[j] = false
      }
    }
  }
  fn(0)
  return res + 1
}
/**
 * @param {number} n
 * @return {number}
 */
export let countNumbersWithUniqueDigits2 = function (n) {
  let res = 1
  let cur = 9
  for (let i = 1; i <= n; i++) {
    // res 为当前轮的阶乘和
    res += cur
    // 下一轮的阶乘
    cur *= 10 - i
  }
  return res
}
