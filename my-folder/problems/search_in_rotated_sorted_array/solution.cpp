class Solution {
public:
    int findMin(vector<int>& nums) {
        int left = 0, right = nums.size() - 1, mid;

        while (left < right) {
            mid = floor((left + right) / 2);
            if (nums[mid] > nums[right])
                left = mid + 1;
            else
                right = mid;
        }
        return left;
    }
    int search(vector<int>& nums, int target) {
        int pivot = findMin(nums);
        int left = 0, right = pivot - 1, mid = -1;

        while (left <= right) {
            mid = floor((left + right) / 2);
            if (nums[mid] == target)
                return mid;
            else if (nums[mid] > target)
                right = mid - 1;
            else
                left = mid + 1;
        }

        left = pivot, right = nums.size() - 1;
        while (left <= right) {
            mid = floor((left + right) / 2);
            if (nums[mid] == target)
                return mid;
            else if (nums[mid] > target)
                right = mid - 1;
            else
                left = mid + 1;
        }
        return -1;
    }
};