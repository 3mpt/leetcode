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
