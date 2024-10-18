class Solution {
public:
    ListNode* reverse(ListNode* curr) {
      ListNode* prev = NULL;
      while (curr) {
        ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
      }
      return prev;
    }
    ListNode* reverseKGroup(ListNode* head, int k) {
        if (!head) return NULL;
        ListNode* tail = head;
        for (int i = 1; i < k; i++) {
          tail = tail->next;
          if (!tail) return head;
        }
        ListNode* next = tail->next;
        tail->next = NULL;
        reverse(head);
        head->next = reverseKGroup(next, k);
        return tail;
    }
};