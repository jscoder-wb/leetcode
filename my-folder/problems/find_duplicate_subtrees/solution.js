var findDuplicateSubtrees = function(root) {
  function traverse(node) {
    if (!node) return "null";
    let left = traverse(node.left);
    let right = traverse(node.right);
    
    let key = `${node.val}-${left}-${right}`;
    seen[key] = (seen[key] || 0) + 1;
    if (seen[key] == 2) output.push(node);
    return key;
  }
  let seen = {}
    , output = []
  traverse(root)
  return output;    
};