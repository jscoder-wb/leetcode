let balanceBST = function(root) {
  function DFSInOrder() {
  let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(root);
    return data;
  }
  const sortedArr = DFSInOrder(root);
  function constructTree(arr) {
    if (!arr.length) return null;
    const mid = Math.floor(arr.length / 2);
    const node = new TreeNode(arr[mid]);
    node.left = constructTree(arr.slice(0, mid)); // slice slices the array ( end not included )
    node.right = constructTree(arr.slice(mid + 1));
    return node;
  }
  return constructTree(sortedArr);
};