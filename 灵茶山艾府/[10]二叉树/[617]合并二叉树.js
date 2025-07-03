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
 * @return {TreeNode}
 */
export let mergeTrees = function (root1, root2) {
  function fn(node1, node2) {
    // 没有1 就返回2 没有2 就返回1
    if (!node1) return node2
    if (!node2) return node1
    // 都有就加和
    node1.val += node2.val

    node1.left = fn(node1.left, node2.left)
    node1.right = fn(node1.right, node2.right)
    return node1
  }

  root1 = fn(root1, root2)
  return root1
}
