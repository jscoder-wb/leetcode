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
    ListNode* mergeTwoLists(ListNode* first, ListNode* second) {
        ListNode* d = new ListNode(-1);
        ListNode* temp = d;
        while (first && second) {
          if (first->val < second->val) {
            temp->next = first;
            first = first->next;
          } else {
            temp->next = second;
            second = second->next;
          }
          temp = temp->next;
        }
        temp->next = first ? first : second;
        return d->next;
    }
};