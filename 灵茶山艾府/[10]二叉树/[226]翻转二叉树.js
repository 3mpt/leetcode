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
 * @return {TreeNode}
 */
export let invertTree = function (root) {
  function fn(node) {
    if (!node) return
    // null 与null 交换 没意义
    // if(node.left === node.right) return
    let tempNode = node.left
    node.left = node.right
    node.right = tempNode
    fn(node.left)
    fn(node.right)
  }
  fn(root)
  return root
}
