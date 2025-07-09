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
 * 当前节点是空 是p 是 q  => 返回当前节点
 * 当前节点左右子树都有 =>返回当前节点
 * 当前节点左子树有，递归左子树的结果
 * 当前节点右子树有，递归右子树的结果
 * 都没有返回空
 */
export let lowestCommonAncestor = function (root, p, q) {
  function fn(node) {
    // 如果是空节点 或者是
    if (!node || node === q || node === p) return node
    const left = fn(node.left)
    const right = fn(node.right)
    if (left && right) return node
    if (left) return left
    if (right) return right
    return null
  }
  return fn(root)
}
