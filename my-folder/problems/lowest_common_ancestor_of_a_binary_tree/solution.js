// dfs approach
let lowestCommonAncestor = function(root, p, q) {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q); 
  const right = lowestCommonAncestor(root.right, p, q); 
  if (!left && !right) return null  
  return left == null ? right : right == null ? left : root;

  // left = null && right = null (root doesn't have child p and q)
  // (left = p or q) && right = null (both were in the left)
  // (right = p or q) && left = null (both were in the right)
  // left = p/q && right = q/p (one was in left other in right) 
};
// better comments