/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
export let isSameTree = function (p, q) {
  // 编辑条件 如果两个节点都是null 返回true ，如果一个为null 另一个不为null 返回false
  if (p === null || q === null) return p === q

  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
