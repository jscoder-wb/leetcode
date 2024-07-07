var canMerge = function (trees) {
  let leaves = new Map(), // leaf to parent mapper
    roots = new Set(), nodesCnt = 0, n = trees.length;

  for (let tree of trees) {
    roots.add(tree.val);
    nodesCnt++;
    if (tree.left) {
      leaves.set(tree.left.val, tree);
      nodesCnt++;
    }
    if (tree.right) {
      leaves.set(tree.right.val, tree);
      nodesCnt++;
    }
  }
  nodesCnt = nodesCnt - (n - 1); // total number of nodes in output tree

  let finalRoot = null; // represents root of output tree
  for (let tree of trees) if (!leaves.has(tree.val)) finalRoot = tree;
    
  for (let tree of trees) {
    if (tree !== finalRoot && leaves.has(tree.val)) {
      let leafParent = leaves.get(tree.val);
      if (leafParent.left && leafParent.left.val === tree.val) 
        leafParent.left = tree;
      else leafParent.right = tree;
      roots.delete(tree.val); // after merging, delete the root. There should be exactly 1 root left at the end.
    }
  }
  return roots.size === 1 && countAndValidate(finalRoot) === nodesCnt
    ? finalRoot : null;
};

function countAndValidate(root, min = -Infinity, max = Infinity) {
  if (!root) return 0;
  if (root.val <= min || root.val >= max) return 0;
  return (
    1 + countAndValidate(root.left, min, root.val) +
    countAndValidate(root.right, root.val, max)
  );
}