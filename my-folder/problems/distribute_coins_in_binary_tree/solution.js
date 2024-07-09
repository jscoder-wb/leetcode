var distributeCoins = function (root) {
  let moves = 0;

  // dfs returns The net excess of coins at the current subtree
  function dfs(node) {
    if (!node) return 0;
    let leftExcess = dfs(node.left);
    let rightExcess = dfs(node.right);

    // Accumulate the total moves needed for balancing the current node
    moves += Math.abs(leftExcess) + Math.abs(rightExcess);

    return node.val + leftExcess + rightExcess - 1;
  }
  dfs(root);
  return moves;
};