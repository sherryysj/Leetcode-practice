// solution 1: iterative using while loop
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode ReverseList(ListNode head) {
        if (head == null) {
            return head;
        }
        ListNode tail = head;
        while (tail.next != null) {
            ListNode formerHead = head;
            head = tail.next;
            tail.next = tail.next.next;
            head.next = formerHead;
        }
        return head;
    }
}