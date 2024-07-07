var buildTree = function(inorder, postorder) {
     if (inorder.length === 0) return null;

    let rootVal = postorder[postorder.length - 1];
    let pivot = inorder.indexOf(rootVal);
// slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) if end=-1 the last element is not included
    return {
        val: rootVal,
        left: buildTree(inorder.slice(0, pivot), postorder.slice(0, pivot)),
        right: buildTree(inorder.slice(pivot + 1), postorder.slice(pivot, -1)) 
    };
};
// see babbar video for understanding