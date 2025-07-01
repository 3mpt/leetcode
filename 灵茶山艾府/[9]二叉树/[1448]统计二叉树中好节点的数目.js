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
export let goodNodes = function (root) {
  let res = 0
  function fn(node, n) {
    if (!node) return
    //     // 如果当前的比n小 继续走走看 如果比n大 则更新res
    if (node.val >= n) {
      n = node.val
      res++
    }
    // 是叶子节点
    if (node.left === node.right) return
    return fn(node.left, n) || fn(node.right, n)
  }

  fn(root, root.val)
  return res
}
