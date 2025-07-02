/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
export let verticalTraversal = function (root) {
  let map = new Map()
  let res = []
  function fn(node, row, col) {
    if (!node) return
    //
    if (!map.has(col)) {
      // 如果map中没有当前的列 则初始化
      map.set(col, [])
    }
    map.get(col).push([row, node.val])
    // 其左右子结点分别位于 (row + 1, col - 1) 和 (row + 1, col + 1)
    fn(node.left, row + 1, col - 1)
    fn(node.right, row + 1, col + 1)
  }
  fn(root, 0, 0)

  //   map的键进行排序
  const sortedKeys = [...map.keys()].sort((a, b) => a - b)
  for (let i = 0; i < sortedKeys.length; i++) {
    const key = sortedKeys[i]
    let node = map.get(key)
    node.sort((a, b) => {
      // 如果行相等 则比较值，否则比较行
      return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
    })
    res.push(
      node.map(([_, b]) => {
        return b
      })
    )
  }
  return res
}
