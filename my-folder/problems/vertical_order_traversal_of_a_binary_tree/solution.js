// dfs and map solution
var verticalTraversal = function(root) {
    const map = {};
    const dfs = (node, row = 0, col = 0) => {
      if (!node) return;
      if (!map[col]) map[col] = {};
      if (!map[col][row]) map[col][row] = [];
      map[col][row].push(node.val);
      dfs(node.left, row + 1, col - 1);
      dfs(node.right, row + 1, col + 1);
    };
    dfs(root);
    const output = [];
    // Object.keys returns the keys of an object in an array

    const columns = Object.keys(map).sort((a, b) => a - b);
    for (const col of columns) {
      const result = [];
      const rows = Object.keys(map[col]).sort((a, b) => a - b);
      for (const row of rows) 
        result.push(...map[col][row].sort((a, b) => a - b));
        //1st sorting > spreading > pushing multiple elems to result
      
      output.push(result);
    }
    return output;
};