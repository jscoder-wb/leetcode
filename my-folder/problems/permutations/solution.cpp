class Solution {
public:
    vector<vector<int>> result;
    void dfs(int i, vector<int>& nums) {
        if (i == nums.size()) {
            result.push_back(nums); // push a copy of nums
            return;
        }
        for (int j = i; j < nums.size(); j++) {
            swap(nums[i], nums[j]);
            dfs(i + 1, nums);
            swap(nums[i], nums[j]);
        }
    }
    vector<vector<int>> permute(vector<int>& nums) {
        dfs(0, nums);
        return result;
    }
};
