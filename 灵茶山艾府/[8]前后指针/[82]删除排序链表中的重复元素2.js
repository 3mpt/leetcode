/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const deleteDuplicates = function (head) {
  let dummy = new ListNode(0, head)
  let cur = dummy
  while (cur?.next) {
    let val = cur.next.val
    // 如果当前的和下一个相等了 从头开始删
    if (val === cur.next?.next?.val) {
      while (val === cur.next?.val) {
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }
  return dummy.next
}
