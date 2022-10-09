# solution 1: iterative using while loop
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head == None:
            return head
        tail = head
        while tail.next != None:
            formerHead = head
            head = tail.next
            tail.next = tail.next.next
            head.next = formerHead
        return head
