class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int rowIndex = 0, columnIndex = matrix[0].size() - 1;

        while (rowIndex < matrix.size() && columnIndex >= 0) {
            if (matrix[rowIndex][columnIndex] == target)
                return true;
            if (matrix[rowIndex][columnIndex] < target)
                rowIndex++;
            else
                columnIndex--;
        }
        return false;
    }
};