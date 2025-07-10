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
export let levelOrder = function (root) {
  if (!root) return []
  let res = []
  let cur = [root]

  while (cur.length) {
    let nxt = []
    let vals = []
    for (let i = 0; i < cur.length; i++) {
      vals.push(cur[i].val)
      if (cur[i].left) {
        nxt.push(cur[i].left)
      }
      if (cur[i].right) {
        nxt.push(cur[i].right)
      }
    }
    res.push(vals)
    cur = nxt
  }
  return res
}
