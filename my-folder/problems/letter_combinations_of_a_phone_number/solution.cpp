class Solution {
public:
    unordered_map<char, string> map = {
        {'2', "abc"}, {'3', "def"},  {'4', "ghi"}, {'5', "jkl"},
        {'6', "mno"}, {'7', "pqrs"}, {'8', "tuv"}, {'9', "wxyz"}};
    vector<string> res;
    void go(int i, string s, string digits) {
        if (i == digits.length()) {
            res.push_back(s);
            return;
        }
        for (char c : map[digits[i]]) {
            go(i + 1, s + c, digits);
        }
    }
    vector<string> letterCombinations(string digits) {
        if (digits.empty())
            return {};
        go(0, "", digits);
        return res;
    }
};