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
const reverseList = function (head) {
  let pre = null
  let cur = head
  while (cur) {
    // 赋值
    const nxt = cur.next
    cur.next = pre
    // 下一次循环
    // 把pre的值更新成cur
    pre = cur
    // 把cur的值更新成next(nxt缓存了)
    cur = nxt
  }
  return pre
}
reverseList()
