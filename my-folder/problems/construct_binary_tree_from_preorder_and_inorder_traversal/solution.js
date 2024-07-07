var buildTree = function(preorder, inorder) {
  if (inorder.length === 0) return null;
  let rootVal = preorder[0]
  let pivot = inorder.indexOf(rootVal)

  return {
    val: rootVal,
    left: buildTree(preorder.slice(1, pivot + 1), inorder.slice(0, pivot)),
    right: buildTree(preorder.slice(pivot + 1), inorder.slice(pivot + 1))
  }
};
// slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
// see babbar video for understanding