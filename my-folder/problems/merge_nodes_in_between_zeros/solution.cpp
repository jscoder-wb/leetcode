/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* mergeNodes(ListNode* head) {
        ListNode* res = new ListNode();
        ListNode* ans = res;
        ListNode* curr = head->next;
        int sum = 0;
        while (curr) {
            if (curr->val != 0) {
                sum += curr->val;
            } else {
                res->next = new ListNode(sum);
                sum = 0;
                res = res->next;
            }
            curr = curr->next;
        }
        return ans->next;
    }
};