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
export let sumNumbers = function (root) {
  let res = 0
  function fn(node, n) {
    if (!node) return
    // 叶子节点
    n = n * 10 + node.val
    if (node.left === node.right) {
      res += n
      return
    }

    return fn(node.left, n) || fn(node.right, n)
  }
  fn(root, 0)
  return res
}
