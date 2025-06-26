/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function (l1, l2) {
  // 定义哨兵节点
  let dummy = new ListNode(0)
  let cur = dummy
  let curry = 0
  // 如果l1 l2 或者进位有值
  while (l1 || l2 || curry) {
    const l1Value = l1?.val || 0
    const l2Value = l2?.val || 0
    const sum = l1Value + l2Value + curry
    curry = Math.floor(sum / 10)
    // 创建节点
    cur.next = new ListNode(sum % 10)
    // 移动
    cur = cur.next
    l1 = l1?.next
    l2 = l2?.next
  }
  return dummy.next
}
addTwoNumbers()
