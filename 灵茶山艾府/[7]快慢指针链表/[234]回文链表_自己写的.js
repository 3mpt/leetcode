/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
export let isPalindrome = function (head) {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  // 中位
  let mid = slow
  // 计算链表长度
  let temp = head
  let n = 0
  while (temp) {
    temp = temp.next
    n++
  }
  // 是否奇数
  const isOdd = n % 2
  let k = isOdd ? n / 2 - 1 : n / 2
  let head2 = reverse(mid)
  let i = 0
  while (i < k) {
    if (head.val !== head2.val) return false
    head = head.next
    head2 = head2.next
    i++
  }
  return true
}
const reverse = (head) => {
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
