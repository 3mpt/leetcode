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
export let isEvenOddTree = function (root) {
  if (!root) return false
  let queue = [root]
  // 是否为偶数
  let even = true
  while (queue.length) {
    let tmp = queue
    queue = []

    for (let i = 0; i < tmp.length; i++) {
      const node = tmp[i]
      if (node.val % 2 == !even) {
        return false
      }
      const nextNode = tmp[i + 1]

      if (nextNode) {
        if (node.val === nextNode.val) return false

        // 当前为偶数 的话 应该递增
        if (even === true && node.val > nextNode.val) return false
        // 当前为奇数 的话 应该递减
        if (even === false && node.val < nextNode.val) return false
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }

    even = !even
  }
  return true
}
