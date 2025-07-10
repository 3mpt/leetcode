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
export let levelOrder = function (root) {
  if (!root) return []
  let res = []
  let stack = [root]

  while (stack.length) {
    let len = stack.length
    let item = []
    while (len > 0) {
      let node = stack.shift()
      item.push(node.val)
      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
      len--
    }
    res.push(item)
  }
  return res
}
