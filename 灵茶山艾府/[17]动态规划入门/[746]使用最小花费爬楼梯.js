/**
 * @param {number[]} cost
 * @return {number}
 */
export let minCostClimbingStairs = function (cost) {
  // let n = cost.length
  // let cache = Array(n + 1).fill(-1)
  // function fn(i) {
  //     if (i <= 1) return 0
  //     if (cache[i] !== -1) return cache[i]
  //     let res = Math.min(fn(i - 1) + cost[i - 1], fn(i - 2) + cost[i - 2])
  //     cache[i] = res
  //     return res
  // }
  // return fn(n)
  let f0 = (f1 = 0)
  for (let i = 1; i < cost.length; i++) {
    f = Math.min(f0 + cost[i - 1], f1 + cost[i])
    f0 = f1
    f1 = f
  }
  return f1
}
export const minCostClimbingStairs2 = function (cost) {
  let n = cost.length
  const memo = new Map()
  function fn(i) {
    // 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
    // 到1 和到0 都是花费0元
    if (i <= 1) return 0
    if (memo.has(i)) return memo.get(i)
    let res = Math.min(fn(i - 1) + cost[i - 1], fn(i - 2) + cost[i - 2])
    memo.set(i, res)
    return res
  }
  return fn(n)
}
