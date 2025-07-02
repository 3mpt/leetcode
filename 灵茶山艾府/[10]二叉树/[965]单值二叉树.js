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
 * @return {boolean}
 */
export let isUnivalTree = function (root) {
  const val = root.val
  function fn(node) {
    if (!node) return true
    if (val !== node.val) return false
    return fn(node.left) && fn(node.right)
  }

  return fn(root)
}
