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
var removeNthFromEnd = function (head, n) {
  let i = 0;
  let curr = head;
  let prev = null;
  while (curr !== null) {
    i++;
    curr = curr.next;
  }
  let skip = i - n;
  curr = head;
  while (skip) {
    prev = curr;
    curr = curr.next;
    skip--;
  }
  if (curr === head) head = head.next || null;
  else prev.next = curr.next;
  return head;
};
