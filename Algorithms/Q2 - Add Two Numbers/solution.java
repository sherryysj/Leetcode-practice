// solution 1: iterative using while loops
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int plusInNextNode;
        int sumDigit = l1.val + l2.val;
        ListNode sumFirstNode = new ListNode(0);
        if (sumDigit >= 10){
            plusInNextNode = 1;
            sumFirstNode.val = sumDigit%10;
        } else {
            plusInNextNode = 0;
            sumFirstNode.val = sumDigit;
        }
        ListNode node = sumFirstNode;
        l1 = l1.next;
        l2 = l2.next;
        while (l1 != null && l2 != null) {
            sumDigit = l1.val + l2.val + plusInNextNode;
            if (sumDigit >= 10){
                plusInNextNode = 1;
                node.next = new ListNode(sumDigit%10);
            } else {
                plusInNextNode = 0;
                node.next = new ListNode(sumDigit);
            }
            node = node.next;
            l1 = l1.next;
            l2 = l2.next;
        }
        
        while (l1 != null) {
            sumDigit = l1.val + plusInNextNode;
            if (sumDigit >= 10){
                plusInNextNode = 1;
                node.next = new ListNode(sumDigit%10);
            } else {
                plusInNextNode = 0;
                node.next = new ListNode(sumDigit);
                node.next.next = l1.next;
                break;
            }
            node = node.next;
            l1 = l1.next;
        } 
        
        while (l2 != null) {
            sumDigit = l2.val + plusInNextNode;
            if (sumDigit >= 10){
                plusInNextNode = 1;
                node.next = new ListNode(sumDigit%10);
            } else {
                plusInNextNode = 0;
                node.next = new ListNode(sumDigit);
                node.next.next = l2.next;
                break;
            }
            node = node.next;
            l2 = l2.next;
        }

        if (plusInNextNode == 1) {
            node.next = new ListNode(1);
        }

        return sumFirstNode;
    }
}