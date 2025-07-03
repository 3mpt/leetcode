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
export let evaluateTree = function (root) {
  function fn(node) {
    // 如果当前是叶子节点直接返回当前节点的值
    if (node.left === node.right) {
      return node.val
    }
    if (node.val === 2) {
      return fn(node.left) || fn(node.right)
    } else {
      return fn(node.left) && fn(node.right)
    }
  }
  return fn(root)
}
