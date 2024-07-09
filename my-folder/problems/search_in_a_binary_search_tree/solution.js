var searchBST = function (root, val) {
  var current = root,
    found = false;
  while (current && !found) {
    if (val < current.val) current = current.left;
    else if (val > current.val) current = current.right;
    else found = true;
  }
  if (!found) return null;
  return current; 
};