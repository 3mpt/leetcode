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
 * @param {number} targetSum
 * @return {number[][]}
 */
export let pathSum = function (root, targetSum) {
  let res = []
  let path = []
  function fn(node, sum) {
    if (!node) return
    sum -= node.val
    path.push(node.val)
    if (node.left === node.right && 0 === sum) {
      res.push([...path])
    } else {
      fn(node.left, sum)
      fn(node.right, sum)
    }

    path.pop()
  }
  fn(root, targetSum)
  return res
}
