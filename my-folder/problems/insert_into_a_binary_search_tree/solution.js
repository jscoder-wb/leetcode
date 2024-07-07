let insertIntoBST = function(root, val) {
  let newNode = new TreeNode(val);
  if (root === null) {
    root = newNode;
    return root;
  }
  let current = root;
  while (true) {
    if (val < current.val) {
      if (current.left === null) {
        current.left = newNode;
        return root;
      }
      current = current.left;
    } else {
      if (current.right === null) {
        current.right = newNode;
        return root;
      }
      current = current.right;
    }
  }
};