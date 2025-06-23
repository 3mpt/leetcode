/**
 * 核心思想过滤加递归
 * 先找到当前的parentId和传入的parentId相同的那一项。
 * 找到了之后将当前的项展开到一个对象中，并且添加一个children属性，将当前的id传入 作为下一次递归时的parentId。
 * 每一次递归返回的结果 会回传到上一次node的children中。
 */

function list2tree(list, parentId = null) {
  return list
    .filter((item) => item.parentId === parentId)
    .map((item) => ({
      ...item,
      children: list2tree(list, item.id),
    }))
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
const tree = list2tree(list)
console.log(tree)
