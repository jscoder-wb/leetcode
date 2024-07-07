let kthSmallest = function(root, k) {
  let result = []
  const inorder = (node) => {
    if (!node) return null;
    inorder(node.left); 
    result.push(node.val); 
    inorder(node.right); 
  }
  inorder(root)
  return result[k-1]
};