// depth first search solution
var diameterOfBinaryTree = function(root) {
    function dfs(node) {
      if (!node) return 0;
      const leftEdges = dfs(node.left);
      const rightEdges = dfs(node.right);
      diameter = Math.max(diameter, leftEdges + rightEdges);
      return 1 + Math.max(leftEdges, rightEdges);
    }
    let diameter = 0;
    dfs(root);
    return diameter;
};