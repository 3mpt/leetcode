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
 * @return {TreeNode}
 */
export let lcaDeepestLeaves = function (root) {
  // 返回的节点
  let res = null
  //   最大深度
  let maxDep = 0
  function fn(node, n) {
    // 如果当前是空节点，更新最大深度
    if (!node) {
      maxDep = Math.max(maxDep, n)
      return n
    }
    // 递左右深度
    const leftDep = fn(node.left, n + 1)
    const rightDep = fn(node.right, n + 1)
    if (maxDep === leftDep && maxDep === rightDep) {
      res = node
    }
    return Math.max(leftDep, rightDep)
  }
  fn(root, 0)
  return res
}
