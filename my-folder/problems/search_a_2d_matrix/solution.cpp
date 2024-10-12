class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int start = 0, end = (matrix.size() * matrix[0].size()) - 1;

        while (start <= end) {
            int mid = floor((start + end) / 2);
            int midNum =
                matrix[floor(mid / matrix[0].size())][mid % matrix[0].size()];

            if (midNum == target)
                return true;
            else if (midNum < target)
                start = mid + 1;
            else
                end = mid - 1;
        }
        return false;
    }
};