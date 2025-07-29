/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export let permute1 = function (nums) {
  let res = []
  let path = []
  let n = nums.length
  function fn(i, arr) {
    if (i === n) {
      res.push(path.slice())
      return
    }
    for (let j of arr) {
      path[i] = j
      let next = new Set(arr) // ✅ 拷贝 set
      next.delete(j)
      fn(i + 1, next)
    }
  }
  fn(0, new Set([...nums]))
  return res
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export let permute2 = function (nums) {
  let res = []
  let path = []
  let n = nums.length

  const visited = Array(n).fill(false)
  function fn() {
    if (path.length === n) {
      res.push(path.slice())
      return
    }
    for (let i = 0; i < n; i++) {
      if (visited[i]) {
        continue
      }
      path.push(nums[i])
      visited[i] = true
      fn()
      path.pop()
      visited[i] = false
    }
  }
  fn()
  return res
}
