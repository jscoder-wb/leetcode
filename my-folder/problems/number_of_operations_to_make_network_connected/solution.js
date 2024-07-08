const makeConnected = (n, connections) => {
  function find(node) {
    if (parent[node] !== node) parent[node] = find(parent[node])
    return parent[node]
  }
  function union(node1, node2) {
    const parent1 = find(node1), parent2 = find(node2);
    if (parent1 !== parent2) parent[parent2] = parent1;
  }
  
  let extraCables = 0
  const parent = Array.from(Array(n), (_, i) => i)
  
  for (let [node, connection] of connections) {
    if (find(node) !== find(connection)) union(node, connection) 
    else extraCables++  
  }
  let numberOfComponents = 0
  for (let i = 0; i < n; i++) if (parent[i] == i) numberOfComponents++
  let ans = numberOfComponents - 1
  if (extraCables >= ans) return ans
  return -1 
}; 
// solution from striver video