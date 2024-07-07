// depth first search solution
var minDepth = function(root) {
    if (!root) return 0;
    let min = Infinity;
    const dfs = (node, depth) => {
      if (!node.left && !node.right && depth < min) min = depth;      
      if (node.left) dfs(node.left, depth + 1);
      if (node.right) dfs(node.right, depth + 1);
    };
    dfs(root, 1);
    return min;
};