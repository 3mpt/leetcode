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
export let isValidBST = function (root) {
  function fn(node) {
    if (!node) return [Infinity, -Infinity]
    const [lMin, lMax] = fn(node.left)
    const [rMin, rMax] = fn(node.right)
    const x = node.val
    // 如果x比左侧最大值小， 或者比右侧最小值大 说明不是一颗二叉搜索树
    if (x <= lMax || x >= rMin) {
      return [-Infinity, Infinity]
    }
    return [Math.min(lMin, x), Math.max(rMax, x)]
  }
  return fn(root)[1] !== Infinity
}
