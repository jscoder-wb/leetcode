// reverse inorder
var bstToGst = function (root) {
  let sum = 0;
  const traverse = (node) => {
    if (node) {
      traverse(node.right);
      sum += node.val;
      node.val = sum;
      traverse(node.left);
    }
  };
  traverse(root);
  return root;
};
// let root = {val: 4}
// root.left = {val: 1}
// root.right = {val: 6}
// root.left.left = {val: 0}
// root.left.right = {val: 2}
// root.left.right.right = {val: 3}
// root.right.left = {val: 5}
// root.right.right = {val: 7}
// root.right.right.right = {val: 8}
// bstToGst(root)