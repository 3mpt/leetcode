/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
export let connect = function (root) {
  if (!root) return root
  let queue = [root]
  while (queue.length) {
    let tmp = queue
    queue = []

    for (let i = 0; i < tmp.length; i++) {
      const node = tmp[i]
      const nextNode = tmp[i + 1]

      if (nextNode) {
        node.next = nextNode
      } else {
        node.next = null
      }

      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return root
}
