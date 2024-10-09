class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int i = m - 1, j = n - 1, curr = nums1.size() - 1;

        while (i >= 0 && j >= 0) {
            if (nums1[i] <= nums2[j]) {
                nums1[curr] = nums2[j];
                j--;
                curr--;
            } else {
                nums1[curr] = nums1[i];
                i--;
                curr--;
            }
        }
        while (j >= 0) { // if 1st arr is empty & 2nd is not
            nums1[curr] = nums2[j];
            j--;
            curr--;
        }
    }
};