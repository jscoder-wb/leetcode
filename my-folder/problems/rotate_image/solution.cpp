class Solution {
public:
    void reverse(vector<int>& arr) {
        int left = 0, right = arr.size() - 1;
        while (left < right) {
            swap(arr[left], arr[right]);
            left++;
            right--;
        }
    }
    void rotate(vector<vector<int>>& matrix) {
        // transpose (interchange rows into cols)
        for (int i = 0; i < matrix.size(); i++) {
            for (int j = i; j < matrix.size(); j++) {
                swap(matrix[i][j], matrix[j][i]);
            }
        }
        for (int i = 0; i < matrix.size(); i++) {
            reverse(matrix[i]);
        }
    }
};