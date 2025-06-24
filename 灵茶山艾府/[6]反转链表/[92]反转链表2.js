/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// [1,2,3,4,5] 2 4 2到4 反转
const reverseBetween = function (head, left, right) {
  // 哨兵节点来处理left为0的情况，因为这时候没有pre 就让p0始终有pre
  const dummyNode = new ListNode(0, head)
  // 将哨兵节点作为p0
  let p0 = dummyNode
  // 这一步循环 重新给p0 赋值，让p0停在循环前一个位置，
  for (let i = 0; i < left - 1; i++) {
    p0 = p0.next
  }
  //  经典方法, 只不过之前的cur都是head ,但是现在p0的位置是head的前一个 所以cur是p0.next
  let pre = null
  let cur = p0.next
  for (let i = 0; i < right - left + 1; i++) {
    nxt = cur.next
    cur.next = pre

    pre = cur
    cur = nxt
  }
  // 上面的操作已经把[left,right]中链表反转完成了
  //   正常p0 指向pre ，p0.next 指向cur
  // p0的next(left节点).next 改变指向
  //  我要改变的是p0.next 而不是left节点 给pre. 虽然以前他俩是一个地方，但是我希望变得是p0.next
  //  下面这两行的顺序，如果先执行了p0.next = pre。p0.next.next的值已经发生变化了
  // 就像火车一样，如果先执行了短的那节，那么下一节是发生变化了。
  //   链表是靠 .next 连接起来的，改一个变量的指向不等于改链表结构。
  p0.next.next = cur
  p0.next = pre
  return dummyNode.next
}
reverseBetween()
