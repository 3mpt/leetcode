/**
 * @param {number} n
 * @return {number}
 */
export let climbStairs = function (n) {
  // const arr = Array(n + 1).fill(-1)
  // function fn(i) {
  //     if (i <= 1) return 1

  //     if (arr[i] !== -1) {
  //         return arr[i]
  //     }
  //     let res = fn(i - 1) + fn(i - 2)
  //     arr[i] = res
  //     return res

  // }
  // return fn(n)
  let f0 = (f1 = 1)
  for (let i = 2; i <= n; i++) {
    let f = f1 + f0
    f0 = f1
    f1 = f
  }
  return f1
}
export const climbStairs2 = function (n) {
  const memo = new Map()
  // i 为第i级台阶
  function fn(i) {
    // 第0到第0 第0 到第1 都只有一种
    if (i <= 1) {
      return 1
    }
    if (memo.has(i)) {
      return memo.get(i)
    }
    // 如果最后一个是走一个则进fn(i-1) 走两个则进fn(i-2)
    let res = fn(i - 1) + fn(i - 2)
    memo.set(i, res)
    return res
  }
  return fn(n)
}
