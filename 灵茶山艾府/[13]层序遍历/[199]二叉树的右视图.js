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
 * @return {number[]}
 */
export let rightSideView = function (root) {
  if (!root) return []
  let res = []
  const queue = [root]
  while (queue.length) {
    let size = queue.length
    while (size) {
      const node = queue.shift()
      if (size === 1) res.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      size--
    }
  }
  return res
}
