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
// 1、直接递归
export const maxDepth = function (root) {
  if (root === null) return 0
  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)
  return Math.max(leftDepth, rightDepth) + 1
}
// 维护全局状态
export const maxDepth2 = function (root) {
  // 维护全局状态
  let res = 0
  function fn(node, n) {
    // 没有节点 归出去
    if (node === null) return
    // 有的话深度+1
    n++
    // 与全局的进行比较
    res = Math.max(res, n)
    // 递
    fn(node.left, n)
    fn(node.right, n)
  }
  fn(root, 0)
  return res
}
