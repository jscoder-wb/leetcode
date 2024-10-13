var kthLargestPerfectSubtree = function (root, k) {
  const perfectSubtreeSizes = [];

  // Helper function to check if a tree is a perfect binary tree
  function isPerfectBinaryTree(node) {
    if (!node) return 0;

    const leftSize = isPerfectBinaryTree(node.left);
    const rightSize = isPerfectBinaryTree(node.right);

    // If the subtree is not perfect, return -1
    if (leftSize === -1 || rightSize === -1 || leftSize !== rightSize) {
      return -1;
    }

    // Calculate the size of the current perfect binary subtree
    const size = 1 + leftSize + rightSize;

    // Store the size of the perfect binary subtree
    perfectSubtreeSizes.push(size);

    return size;
  }

  // Start DFS from the root
  isPerfectBinaryTree(root);

  // Sort the sizes in descending order
  perfectSubtreeSizes.sort((a, b) => b - a);

  // Return the k-th largest size, or -1 if it doesn't exist
  return k <= perfectSubtreeSizes.length ? perfectSubtreeSizes[k - 1] : -1;
};