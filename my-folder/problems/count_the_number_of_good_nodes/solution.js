var countGoodNodes = function (edges) { 
  const graph = new Map();
  edges.forEach(([u, v]) => {
    if (!graph.has(u)) graph.set(u, []);
    if (!graph.has(v)) graph.set(v, []);
    graph.get(u).push(v);
    graph.get(v).push(u);
  }); 
  const subtreeSize = new Array(edges.length + 1).fill(0);
  const visited = new Array(edges.length + 1).fill(false);

  function dfs(node) {
    visited[node] = true;
    subtreeSize[node] = 1; // Count this node itself
    let childSizes = [];

    for (const neighbor of graph.get(node)) {
      if (!visited[neighbor]) {
        dfs(neighbor);
        subtreeSize[node] += subtreeSize[neighbor];
        childSizes.push(subtreeSize[neighbor]);
      }
    }
    if (subtreeSize[node] == 1) goodNodes++ // for leaf nodes
    if (childSizes.length > 0) {
      const firstSize = childSizes[0];
      if (childSizes.every(size => size === firstSize)) {
        goodNodes++;
      }
    }
  }
  let goodNodes = 0;
  dfs(0); 
  return goodNodes;
};