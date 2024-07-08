// morris traversal
var preorderTraversal = function(node) {
  let output = []
  while (node != null) {
    if (node.left == null) {
      output.push(node.val)
      node = node.right
    } else {
      var current = node.left
      while (current.right != null && current.right != node) current = current.right
      if (current.right == node) {
        current.right = null
        node = node.right
      } else {
        output.push(node.val)
        current.right = node
        node = node.left
      }
    }
  } return output
};