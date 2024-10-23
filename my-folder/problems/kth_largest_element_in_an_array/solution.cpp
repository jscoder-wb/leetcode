class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        priority_queue<int> q;
        for (int e : nums) {
          q.push(e);
        }
        while (k > 1) {
          q.pop();
          k--;
        }
        return q.top();
    }
};