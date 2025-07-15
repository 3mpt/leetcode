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
export let deepestLeavesSum = function (root) {
  if (!root) return 0
  let queue = [root]
  let res = []
  while (queue.length) {
    let tmp = queue
    queue = []
    let sum = 0

    for (const node of tmp) {
      sum += node.val
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(sum)
  }
  return res[res.length - 1]
}
