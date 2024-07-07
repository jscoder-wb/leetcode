// dfs approach
var zigzagLevelOrder = function(root) {
    let output = [];
    const dfs = (node, lvl) => {
      if (!node) return;
      if (output[lvl] == null) output[lvl] = [];
      if (lvl % 2 === 0) output[lvl].push(node.val);
      else output[lvl].unshift(node.val);
      dfs(node.left, lvl + 1);
      dfs(node.right, lvl + 1);
    };
    dfs(root, 0);
    return output;
};