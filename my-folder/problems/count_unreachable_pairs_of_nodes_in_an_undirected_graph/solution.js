var countPairs = function (n, edges) {
  let parent = new Array(n);
  let size = new Array(n);
  for (let i = 0; i < n; ++i) {
    parent[i] = i;
    size[i] = 1;
  }
  let numVisitedNodes = 0;
  let numUnreachablePairsOfNodes = 0;

  for (let i = 0; i < edges.length; ++i) {
    let u = edges[i][0];
    let v = edges[i][1];
    union(u, v, parent, size);
  }

  for (let node = 0; node < n; ++node) {
    if (parent[node] === node) {
      let numNodesInCurrentGroup = size[node];
      numUnreachablePairsOfNodes += (numNodesInCurrentGroup * numVisitedNodes);
      numVisitedNodes += numNodesInCurrentGroup;
    }
  }
  return numUnreachablePairsOfNodes;
};

var find = function (node, parent) {
  while (node !== parent[node]) {
    node = parent[node];
  }
  return node;
};

var union = function (u, v, parent, size) {
  let rootU = find(u, parent);
  let rootV = find(v, parent);
  if (rootU !== rootV) {
    if (size[rootU] < size[rootV]) {
      [rootU, rootV] = [rootV, rootU];
    }
    parent[rootV] = rootU;
    size[rootU] += size[rootV];
  }
};