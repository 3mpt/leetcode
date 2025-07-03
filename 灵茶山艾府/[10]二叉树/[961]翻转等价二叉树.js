/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
export let flipEquiv = function (root1, root2) {
  function fn(node1, node2) {
    // 判断是否为空 如果一个为空不等价， 两个都为空才等价
    if (!node1 || !node2) return node1 === node2
    // 如果不相等 则false
    if (node1.val !== node2.val) return false
    // 判断左左 右右 （不翻转） 左右 右左（翻转） 看是否满足任意一个
    return (
      (fn(node1.left, node2.left) && fn(node1.right, node2.right)) ||
      (fn(node1.left, node2.right) && fn(node1.right, node2.left))
    )
  }
  return fn(root1, root2)
}
