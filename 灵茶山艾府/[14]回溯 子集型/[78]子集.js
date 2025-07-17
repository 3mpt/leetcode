/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsets = function (nums) {
  const n = nums.length
  const ans = [] // 存储结果
  const path = [] // 当前子集

  function fn(i) {
    // 递归出口：到达数组末尾时，保存当前子集
    if (i === n) {
      ans.push(path.slice()) // 复制 path 并加入结果
      return
    }

    // 1. 不加入当前元素
    fn(i + 1)

    // 2. 加入当前元素
    path.push(nums[i])
    fn(i + 1)
    path.pop() // 回溯，移除刚加入的元素
  }

  fn(0) // 从索引 0 开始递归
  return ans // 返回所有子集
}

console.log(subsets([1, 2, 3]))
