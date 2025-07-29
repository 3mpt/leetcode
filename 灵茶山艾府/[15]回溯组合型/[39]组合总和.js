/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
export let combinationSum = function (candidates, target) {
  // 找到candidates的所有组合, target做减法
  //  同一个 数字可以 无限制重复被选取
  let n = candidates.length
  let res = []
  let path = []
  function fn(i, count) {
    if (count === 0) {
      res.push(path.slice())
      return
    }
    if (count < 0) return
    for (let j = i; j < n; j++) {
      path.push(candidates[j])
      //  这里 用j 不用j+1 就可以实现重复选择
      fn(j, count - candidates[j])
      path.pop()
    }
  }
  fn(0, target)
  return res
}
