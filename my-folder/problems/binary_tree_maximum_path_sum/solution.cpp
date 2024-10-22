class Solution {
public:
    int res = INT_MIN;
    int findSums(TreeNode* node) {
      if (!node) return 0;
      int l = findSums(node->left);
      int r = findSums(node->right);
      int allSum = l + r + node->val;
      int lSum = l + node->val;
      int rSum = r + node->val;
      res = max({res, node->val, allSum, lSum, rSum});
      return max({lSum, rSum, node->val});
    }
    int maxPathSum(TreeNode* root) {
      findSums(root);
      return res;
    }
};