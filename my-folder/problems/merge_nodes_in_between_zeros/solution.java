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
    public ListNode mergeNodes(ListNode head) {
       ListNode res = new ListNode();
        ListNode ans = res;
        ListNode curr = head.next;
        int sum = 0;
        while (curr != null) {
            if (curr.val != 0) {
                sum += curr.val;
            } else {
                res.next = new ListNode(sum);
                sum = 0;
                res = res.next;
            }
            curr = curr.next;
        }
        return ans.next; 
    }
}