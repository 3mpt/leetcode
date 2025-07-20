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
 * @return {string[]}
 */
export let binaryTreePaths = function (root) {
  let res = []
  let path = []
  function fn(node) {
    if (!node) return
    path.push(node.val)
    if (node.left === node.right) {
      res.push(path.join('->'))
    }
    fn(node.left)
    fn(node.right)
    path.pop()
  }
  fn(root)
  return res
}
