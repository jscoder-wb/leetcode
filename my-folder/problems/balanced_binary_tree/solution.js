// depth first search solution
var isBalanced = function(root) {
    let dfs = function (node) {
      if (!node) return 0;

      // left/right represents max height in left/right subtrees
      let left =  dfs(node.left); 
      let right =  dfs(node.right); 
      
    // console.log(node.val, left, right)
      if (Math.abs(left - right) > 1) return Infinity;
      return Math.max(left, right) + 1
    };
    return dfs(root) == Infinity ? false : true;
};