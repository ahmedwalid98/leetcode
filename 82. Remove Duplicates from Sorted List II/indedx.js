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
var deleteDuplicates = function (head) {
  let curr = head;
  let prev = null;
  let set = new Set();
  while (curr !== null) {
    if (!set.has(curr.val) && prev !== curr.val) {
      set.add(curr.val);
      prev = null;
    } else {
      set.delete(curr.val);
      prev = curr.val;
    }
    curr = curr.next;
  }
  let output = null;
  for (let num of Array.from(set).reverse()) {
    output = {
      val: num,
      next: output,
    };
  }

  return output;
};
