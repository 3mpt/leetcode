/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
export let reorderList = function (head) {
  // 找到中位数
  let mid = findMid(head)
  // 翻转剩下的那一段
  let head2 = reserve(mid)
  while (head2.next) {
    // 保存nxt
    const nxt = head.next
    const nxt2 = head2.next
    //第一段的头指向最后一段的头
    head.next = head2
    // 第二段的头指向第一段的下一个 ，相当于一个插入操作
    head2.next = nxt
    // 之前缓存的nxt 进行更新指针操作。
    head = nxt
    head2 = nxt2
  }
}
const findMid = (head) => {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}
const reserve = (head) => {
  let cur = head
  let pre = null
  while (cur) {
    const nxt = cur.next
    cur.next = pre

    pre = cur
    cur = nxt
  }
  return pre
}
