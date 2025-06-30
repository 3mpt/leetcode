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
  let res = Infinity
  function fn(node, n) {
    // 如果当前节点为空 退出
    if (node === null) return
    // 不为空 更新n
    n++
    // 说明当前节点为叶子节点 都是null  并不是值相等他们就====
    if (node.left === node.right) {
      //   更新res
      res = Math.min(res, n)
      return
    }
    fn(node.left, n)
    fn(node.right, n)
  }
  fn(root, 0)
  return root ? res : 0
}
