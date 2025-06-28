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
// 这个题可以转化为相同的数来做，将root的左右节点分开，变成两个子树 进行比较来做
// 区别在于用p.left, q.right 对比 p.right, q.left对比
export let isSymmetric = function (root) {
  return isSame(root.left, root.right)
}
const isSame = (p, q) => {
  if (p === null || q === null) return p === q
  return p.val === q.val && isSame(p.left, q.right) && isSame(p.right, q.left)
}
