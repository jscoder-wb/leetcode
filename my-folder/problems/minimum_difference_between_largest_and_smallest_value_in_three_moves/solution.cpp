class Solution {
public:
    int minDifference(vector<int>& nums) {
        int len = nums.size();
    if (len <= 4) {
        return 0;
    }
    std::sort(nums.begin(), nums.end());
    return std::min({
        nums[len - 4] - nums[0],
        nums[len - 3] - nums[1],
        nums[len - 2] - nums[2],
        nums[len - 1] - nums[3]
    });
    }
};