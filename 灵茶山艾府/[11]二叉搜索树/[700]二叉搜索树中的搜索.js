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
 * @param {number} val
 * @return {TreeNode}
 */
export let searchBST = function (root, val) {
  function fn(node) {
    if (!node) return null
    if (node.val > val) {
      return fn(node.left)
    } else if (node.val < val) {
      return fn(node.right)
    } else {
      return node
    }
  }
  return fn(root)
}
