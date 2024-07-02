class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
       std::unordered_map<int, int> obj1;
std::vector<int> res;

for (int num : nums1) {
    obj1[num]++;
}

for (int num : nums2) {
    if (obj1[num] > 0) {
        res.push_back(num);
        obj1[num]--;
    }
}

return res; 
    }
};