//Approach-1 (Perfect use of std::stringstream)
class Solution {
public:
    string reverseWords(string s) {
        stringstream ss(s);
        string token = "";
        string result = "";

        // >> is reading from stream
        while(ss >> token) {
            result = token + " " + result;
        }
        return result.substr(0, result.length()-1);
    }
};