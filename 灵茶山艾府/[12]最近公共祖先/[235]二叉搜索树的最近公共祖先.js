/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
/**
 * p q都小于x 递归左子树
 * p q都大于x 递归右子树
 * 其余情况返回当前节点
 */
export let lowestCommonAncestor = function (root, p, q) {
  function fn(node) {
    const x = node.val
    if (p.val < x && q.val < x) {
      return fn(node.left)
    }
    if (p.val > x && q.val > x) {
      return fn(node.right)
    }
    return node
  }
  return fn(root)
}
