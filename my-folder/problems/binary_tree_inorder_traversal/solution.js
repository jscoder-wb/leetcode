var inorderTraversal = function(root) {
  const result = []
  const dfs = function(node) {
      if(!node) return
      dfs(node.left)
      result.push(node.val)
      dfs(node.right)
  } 
  dfs(root) 
  return result  
};