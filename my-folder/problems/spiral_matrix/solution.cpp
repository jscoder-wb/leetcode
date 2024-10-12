class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        int rows = matrix.size(), cols = matrix[0].size();
        vector<int> result;
        int topRow = 0, bottomRow = rows - 1, leftCol = 0, rightCol = cols - 1,
            size = rows * cols;

        while (result.size() < size) {
            // topRow
            for (int i = leftCol; i <= rightCol && result.size() < size; i++)
                result.push_back(matrix[topRow][i]);
            topRow++;

            // rightCol
            for (int i = topRow; i <= bottomRow && result.size() < size; i++)
                result.push_back(matrix[i][rightCol]);
            rightCol--;

            // bottomRow
            for (int i = rightCol; i >= leftCol && result.size() < size; i--)
                result.push_back(matrix[bottomRow][i]);
            bottomRow--;

            // leftcol
            for (int i = bottomRow; i >= topRow && result.size() < size; i--)
                result.push_back(matrix[i][leftCol]);
            leftCol++;
        }
        return result;
    }
};