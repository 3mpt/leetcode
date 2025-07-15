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
 * @return {number[][]}
 */
export let zigzagLevelOrder = function (root) {
  if (!root) return []
  let res = []
  let queue = [root]
  let even = false
  while (queue.length) {
    let tmp = queue
    queue = []
    let item = []
    for (const node of tmp) {
      item.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(even ? item.reverse() : item)
    even = !even
  }
  return res
}
