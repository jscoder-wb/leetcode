class Solution {
public:
    bool checkInclusion(string s1, string s2) {
        vector<int> cur(26, 0);
        vector<int> goal(26, 0);

        for (char c : s1) {
            goal[c - 'a']++;
        }

        for (int i = 0; i < s2.length(); i++) {
            cur[s2[i] - 'a']++;
            if (i >= s1.length()) {
                cur[s2[i - s1.length()] - 'a']--;
            }
            if (goal == cur)
                return true;
        }
        return false;
    }
};