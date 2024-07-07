// dfs approach
var rightSideView = function (root) {
  if (!root) return [];
  let output = [];
  function dfs(node, height) {
    if (!node) return;
    output[height] = node.val;
    dfs(node.left, height + 1);
    dfs(node.right, height + 1);
  }
  dfs(root, 0);
  return output;
};