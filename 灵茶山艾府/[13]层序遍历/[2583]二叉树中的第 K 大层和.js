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
 * @param {number} k
 * @return {number}
 */
export let kthLargestLevelSum = function (root, k) {
  if (!root) return -1
  let queue = [root]
  let res = []
  while (queue.length) {
    let sum = 0
    let tmp = queue
    queue = []
    for (const node of tmp) {
      sum += node.val
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(sum)
  }

  if (res.length < k) return -1
  res.sort((a, b) => b - a)

  return res[k - 1]
}
