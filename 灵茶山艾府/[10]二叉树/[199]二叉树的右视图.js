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
 * @return {number[]}
 */
export let rightSideView = function (root) {
  // 答案数组
  const res = []
  // 递归函数
  function fn(node, dep) {
    if (node === null) return
    // 深度和长度相同 说明当前的是
    if (dep === res.length) {
      res.push(node.val)
    }
    fn(node.right, dep + 1)
    fn(node.left, dep + 1)
  }
  fn(root, 0)
  return res
}
