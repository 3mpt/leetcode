/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// a = b.next → 是「走」过去：让 a 指向 b 的下一个；

// a.next = b → 是「改」指针：让 a 的下一个变成 b；

// a = b → 是把 b 这个节点的引用赋给 a（不影响链表结构）；
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function (head, k) {
  // 计算长度
  let n = 0
  let cur = head
  while (cur) {
    // 更新cur的值
    cur = cur.next
    n++
  }
  // 设置 头节点
  const dummyNode = new ListNode(0, head)
  let p0 = dummyNode
  //  更新cur的值
  cur = p0.next
  pre = null
  while (n >= k) {
    n -= k
    let i = 0
    while (i < k) {
      i++
      const nxt = cur.next
      //  改变cur的指向变为pre  翻转链表的关键
      cur.next = pre
      // 更新值 把cur的值更新到pre上
      pre = cur
      //  更新值 把nxt 的值更新到cur 上
      cur = nxt
    }
    const nxt = p0.next
    // 改变指向
    p0.next.next = cur
    // 改变指向
    p0.next = pre
    p0 = nxt
  }
  return dummyNode.next
}
reverseKGroup()
