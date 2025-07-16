export let rightSideView = function (root) {
  if (!root) return []
  let queue = [root]
  let res = []
  while (queue.length) {
    let tmp = queue
    queue = []
    let temp = []
    for (const node of tmp) {
      temp.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(temp[temp.length - 1])
  }
  return res
}
