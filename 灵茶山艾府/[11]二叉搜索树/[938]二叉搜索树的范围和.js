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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
export let rangeSumBST = function (root, low, high) {
  function fn(node) {
    if (!node) return 0
    if (node.val > high) {
      return fn(node.left)
    }
    if (node.val < low) {
      return fn(node.right)
    }
    if (node.val >= low && node.val <= high) {
      return node.val + fn(node.left) + fn(node.right)
    }
  }

  return fn(root)
}
