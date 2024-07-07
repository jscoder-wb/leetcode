var deleteNode = function(root, value) {
  function callDFS(node) {
    if (!node) return null;
    if (node.val == value) {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      let curr = node.right;
      while (curr.left) curr = curr.left;
      curr.left = node.left;
      return node.right;
    }
    if (value > node.val) node.right = callDFS(node.right);
    else node.left = callDFS(node.left);
    return node;
  }
  return callDFS(root);
};