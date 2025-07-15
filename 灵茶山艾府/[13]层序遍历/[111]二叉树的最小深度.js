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
 * @return {number}
 */
export let minDepth = function (root) {
  if (!root) return 0
  let queue = [root]
  let res = 0
  while (queue.length) {
    let len = queue.length
    res++
    while (len--) {
      const node = queue.shift()

      if (node.left === node.right) return res

      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return res
}
