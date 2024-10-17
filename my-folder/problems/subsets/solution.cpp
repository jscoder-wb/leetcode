class Solution {
private:
    void solve(vector<int> nums, vector<int> subset, int index,
               vector<vector<int>>& ans) {
        if (index >= nums.size()) {
            ans.push_back(subset);
            return;
        }
        // exclude
        solve(nums, subset, index + 1, ans);

        // include
        subset.push_back(nums[index]);
        solve(nums, subset, index + 1, ans);
        subset.pop_back();
    }

public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> ans;
        vector<int> subset;
        int index = 0;
        solve(nums, subset, index, ans);
        return ans;
    }
};
// int main() {
//     Solution ob;
//     vector<int> nums = {1, 2, 3};
//   vector<vector<int>> res = ob.subsets(nums);
//   for (int i = 0; i < res.size(); i++){
//     for (int j = 0; j < res[i].size(); j++) {
//       cout << res[i][j] << " ";
//     }
//     cout << endl;
//   }
//     return 0;
// }
