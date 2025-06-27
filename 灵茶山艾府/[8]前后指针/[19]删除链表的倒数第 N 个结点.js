/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
export const removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head)
  let left = dummy
  let right = dummy
  // 此时right在n那里
  while (n--) {
    right = right.next
  }
  // 此时r在末尾，l在n—1那里
  while (right.next) {
    left = left.next
    right = right.next
  }
  left.next = left.next.next
  // dummy与left right指向了同一个引用。left.next = left.next.next操作也会改变dummy
  return dummy.next
}
