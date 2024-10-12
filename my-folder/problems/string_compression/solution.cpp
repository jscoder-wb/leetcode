class Solution {
public:
    int compress(vector<char>& chars) {
        if (chars.empty()) return 0;
    int j = 0;
    char currentCharacter = chars[0];
    int counter = 1;
    for (int i = 1; i <= chars.size(); i++) {
        if (i < chars.size() && chars[i] == currentCharacter) {
            counter++;
        } else {
            chars[j] = currentCharacter;
            if (counter > 1) {
                string s = to_string(counter);
                for (char c : s) {
                    chars[++j] = c;
                }
            }
            j++;
            if (i < chars.size()) {
                currentCharacter = chars[i];
                counter = 1;
            }
        }
    }
    return j;
    }
};