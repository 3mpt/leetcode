/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
export let deleteNode = function (node) {
  // 将下一个节点的值复制到当前节点
  node.val = node.next.val
  // 删除下一个节点
  node.next = node.next.next
}
