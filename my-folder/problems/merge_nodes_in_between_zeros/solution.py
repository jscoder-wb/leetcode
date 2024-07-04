# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        res = ListNode()
        ans = res
        curr = head.next
        sum_val = 0
        while curr:
            if curr.val != 0:
                sum_val += curr.val
            else:
                res.next = ListNode(sum_val)
                sum_val = 0
                res = res.next
            curr = curr.next
        return ans.next