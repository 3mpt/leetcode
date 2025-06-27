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
  // 奇数时候有 偶数没有
  // 奇数时候slow 再往前顶一个
  if (fast) {
    slow = slow.next
  }
  //  两段链表
  let left = head
  let right = reverse(slow)
  // 判断回文
  while (right) {
    if (left.val !== right.val) return false
    left = left.next
    right = right.next
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
