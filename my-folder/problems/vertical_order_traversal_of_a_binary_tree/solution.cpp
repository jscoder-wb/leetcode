class Solution {
public:
    map<int, map<int, vector<int>>> nodeMap; // ordered map by keys
    void dfs(TreeNode* node, int row = 0, int col = 0) {
        if (!node)
            return;
        nodeMap[col][row].push_back(node->val);
        dfs(node->left, row + 1, col - 1);
        dfs(node->right, row + 1, col + 1);
    }
    vector<vector<int>> verticalTraversal(TreeNode* root) {
        dfs(root, 0, 0);
        vector<vector<int>> output;

        for (auto col : nodeMap) {
            vector<int> result;
            for (auto row : col.second) {
                sort(row.second.begin(), row.second.end());
                result.insert(result.end(), row.second.begin(),
                              row.second.end());
            }
            output.push_back(result);
        }
        return output;
    }
};