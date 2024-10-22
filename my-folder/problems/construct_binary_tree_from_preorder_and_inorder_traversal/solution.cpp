class Solution {
public:
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
      if (inorder.empty()) return nullptr;
    
    int rootVal = preorder[0];
    int pivot = find(inorder.begin(), inorder.end(), rootVal) - inorder.begin();

    TreeNode* root = new TreeNode(rootVal);
    vector<int> leftPre(preorder.begin() + 1, preorder.begin() + pivot + 1);
    vector<int> leftIn(inorder.begin(), inorder.begin() + pivot);
    
    vector<int> rightPre(preorder.begin() + pivot + 1, preorder.end());
    vector<int> rightIn(inorder.begin() + pivot + 1, inorder.end());

    root->left = buildTree(leftPre, leftIn);
    root->right = buildTree(rightPre, rightIn);
    
    return root;  
    }
};