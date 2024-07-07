// dfs approach 
const maxPathSum = (root) => {
  let max = -Infinity;
  
  const findSums = (node) => {
    if (!node) return 0;
    let left = findSums(node.left),
      right = findSums(node.right),
      allSum = left + right + node.val,
      leftNodeSum = left + node.val,
      rightNodeSum = right + node.val;
    
    max = Math.max(max, node.val, allSum, leftNodeSum, rightNodeSum);
    return Math.max(leftNodeSum, rightNodeSum, node.val);
  };
  findSums(root);
  return max;
};