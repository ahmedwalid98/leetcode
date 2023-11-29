/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let firstHead = headA,
    secondHead = headB;

  while (firstHead !== secondHead) {
    if (firstHead) firstHead = firstHead.next;
    else firstHead = headB;

    if (secondHead) secondHead = secondHead.next;
    else secondHead = headA;
  }

  return firstHead;
};
