var isSymmetric = function(root) {
    if (root == null) return true;
    return symmetryChecker(root.left, root.right);
};

function symmetryChecker(left, right) {
    if (left == null && right == null) return true; 
    if (left == null || right == null) return false; 
    if (left.val !== right.val) return false;
    return symmetryChecker(left.left, right.right) &&
    symmetryChecker(left.right, right.left);
}