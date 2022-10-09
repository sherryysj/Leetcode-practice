// solution 1: iterative using while loop
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
var reverseList = function (head) {
  if (head == null) {
    return head;
  }
  let tail = head;
  while (tail.next != null) {
    let formerHead = head;
    head = tail.next;
    tail.next = tail.next.next;
    head.next = formerHead;
  }
  return head;
};
