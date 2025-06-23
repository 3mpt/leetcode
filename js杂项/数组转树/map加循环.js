/**
 * 数组转树
 * 首先定义一个map id将当前列表中所有项展开放进去id作为健。value是当前的节点对象，然后初始化一个children属性
 * 第一次遍历，初始化map,便于后续节点的查找。 进行map存储，这里存储的都是引用对象，
 * 第二次遍历 判断当前是不是父节点 如果是则吧父节点放到结果数组
 * 如果不是父节点，则通过parentId找到他的父节点 然后将当前节点放入到父节点的children属性中。
 * 整个过程运用了引用传递的过程。不断的修改map，而res中存放的只是map中的引用地址，
 * 所以原理就是找到父节点将当前节点更新父节点的children中。
 *
 */
function listToTree(list) {
  const res = []
  const map = {}
  list.forEach((item) => {
    map[item.id] = { ...item, children: [] }
  })
  list.forEach((item) => {
    const node = map[item.id]
    if (item.parentId === null || item.parentId === undefined) {
      res.push(node)
    } else {
      const parent = map[item.parentId]
      if (parent) {
        parent.children.push(node)
      }
    }
  })
  return res
}
const list = [
  { id: 1, name: 'CEO', parentId: null },
  { id: 2, name: 'CTO', parentId: 1 },
  { id: 3, name: 'CFO', parentId: 1 },
  { id: 4, name: '开发经理', parentId: 2 },
  { id: 5, name: '会计', parentId: 3 },
  { id: 6, name: '开发者', parentId: 4 },
  { id: 7, name: '实习生', parentId: 6 },
]
const tree = listToTree(list)
console.log(tree)
