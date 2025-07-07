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
export let isValidBST = function (root) {
  function fn(node, left, right) {
    if (!node) return true
    // 递归更新 左子树将当前值缩小为右闭 右子树缩小为左闭
    return left < node.val && node.val < right && fn(node.left, left, node.val) && fn(node.right, node.val, right)
  }
  return fn(root, -Infinity, Infinity)
}
