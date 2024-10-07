class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        vector<int> result = {-1, -1};
        if (nums.empty())
            return result;
        result[0] = findStartPosition(nums, target);
        result[1] = findEndPosition(nums, target);
        return result;
    }
    int findStartPosition(vector<int>& a, int target) {
        int left = 0;
        int right = a.size() - 1;
        int start = -1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (a[mid] == target) {
                start = mid;
                right = mid - 1;
            } else if (target > a[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return start;
    }
    int findEndPosition(vector<int>& a, int target) {
        int left = 0;
        int right = a.size() - 1;
        int end = -1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (a[mid] == target) {
                end = mid;
                left = mid + 1;
            } else if (target > a[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return end;
    }
};