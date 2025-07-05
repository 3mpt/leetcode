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
 * @return {number[]}
 */
export let findFrequentTreeSum = function (root) {
  let resArr = []
  let hash = new Map()

  function fn(node) {
    if (!node) return 0
    let sum = node.val + fn(node.left) + fn(node.right)

    hash.set(sum, (hash.get(sum) || 0) + 1)

    return sum
  }
  fn(root)
  const maxCount = Math.max(...hash.values())
  hash.forEach((v, k) => {
    if (v === maxCount) {
      resArr.push(k)
    }
  })

  return resArr
}
