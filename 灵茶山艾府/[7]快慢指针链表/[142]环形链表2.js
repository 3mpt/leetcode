/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export let detectCycle = function (head) {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      while (slow !== head) {
        slow = slow.next
        head = head.next
      }
      return slow
    }
  }

  return null
}
