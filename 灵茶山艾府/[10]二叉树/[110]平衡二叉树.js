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
export let isBalanced = function (root) {
  function fn(node) {
    // 如果node为null 说明深度为0 返回0
    if (node === null) return 0
    // 递归左子树 如果拿到的是-1 则层层向上传递
    const leftDepth = fn(node.left)
    if (leftDepth === -1) return -1
    // 右边一样，当时需要计算当前这一层的left 和right 深度的差的绝对值是否大于1  不然返回-1
    const rightDepth = fn(node.right)
    if (rightDepth === -1 || Math.abs(leftDepth - rightDepth) > 1) return -1
    // 正常返回right 和left 的最大值，并且+1 说明当前这一层走完了 归的时候+1
    return Math.max(leftDepth, rightDepth) + 1
  }
  // 如果最后结果不是-1 说明是平衡二叉树
  return fn(root) !== -1
}
