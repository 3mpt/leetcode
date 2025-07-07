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
  // 定义前节点为负无穷
  let pre = -Infinity
  function fn(node) {
    // 如果没有节点
    if (!node) return true
    // 递归左子树
    if (!fn(node.left)) return false
    // 当前节点值 应该比pre 大，如果小于了返回false
    if (node.val <= pre) return false
    pre = node.val
    return fn(node.right)
  }
  return fn(root)
}
