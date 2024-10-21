class Solution {
public:
    bool isValid(string s) {
        stack<char> stack;
        for (int i = 0; i < s.length(); i++) {
            char c = s[i];
            switch (c) {
            case '(':
                stack.push(')');
                break;
            case '[':
                stack.push(']');
                break;
            case '{':
                stack.push('}');
                break;
            default:
                if (stack.empty() || c != stack.top())
                    return false;
                stack.pop();
            }
        }
        return stack.empty();
    }
};