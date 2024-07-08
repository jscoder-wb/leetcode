// binary lifting solution (from pepcoding video)
let table
let TreeAncestor = function (n, parent) {
  let Mat = new Array(n)
  for (let i = 0; i < n; i++) Mat[i] = new Array(16)
  for (let i = 0; i < n; i++) Mat[i][0] = parent[i]
  for (let j = 1; j < 16; j++)
    for (let i = 0; i < n; i++)
      if (Mat[i][j - 1] == -1) Mat[i][j] = -1
      else Mat[i][j] = Mat[Mat[i][j - 1]][j - 1]
  table = Mat
}
TreeAncestor.prototype.getKthAncestor = function (node, k) {
  for (let i = 0; i < 16; i++) {
    if ((k >> i) & 1) {
      node = table[node][i]
      if (node == -1) return -1
    }
  }
  return node
}

/** 
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */