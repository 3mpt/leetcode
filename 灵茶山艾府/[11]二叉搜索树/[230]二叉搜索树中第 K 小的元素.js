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
 * @param {number} k
 * @return {number}
 */
export let kthSmallest = function (root, k) {
  let ans = 0
  function fn(node) {
    if (!node || k === 0) return

    fn(node.left) //左
    k--
    if (k === 0) {
      ans = node.val //中
    }
    fn(node.right) // 右
  }
  fn(root)
  return ans
}
