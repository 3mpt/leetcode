/**
 * @param {number[]} nums
 * @return {number}
 */
export let rob = function (nums) {
  const n = nums.length
  // 递推
  // const f = Array(n + 2).fill(0)
  // for (let i = 0; i < n; i++) {
  //     f[i + 2] = Math.max(f[i + 1], f[i] + nums[i])
  // }
  // return f[n + 1]
  // 递推2
  // f1 上一个 f0 上上一个 f 是当前
  // 每次都需要往前传一个 把 上一个变为上上个, 当前变为上一个
  let f0 = (f1 = 0)
  for (let i = 0; i < n; i++) {
    let f = Math.max(f1, f0 + nums[i])
    f0 = f1
    f1 = f
  }
  return f1
  // 记忆化搜索
  // const cache = Array(n).fill(-1)
  // function fn(i) {
  //     if (i < 0) return 0
  //     if (cache[i] !== -1) {
  //         return cache[i]
  //     }
  //     let res = Math.max(fn(i - 1), fn(i - 2) + nums[i])
  //     cache[i] = res
  //     return res
  // }
  // // 从最后一个数入口
  // return fn(n - 1)
}
