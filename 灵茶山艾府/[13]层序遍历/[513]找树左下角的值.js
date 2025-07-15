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
 * @return {number}
 */
export let findBottomLeftValue = function (root) {
  let queue = [root]
  let node
  while (queue.length) {
    node = queue.shift()
    node.right && queue.push(node.right)
    node.left && queue.push(node.left)
  }
  return node.val
}
