// prims algo (from codeStory)
function primsMinMST(adj, V) {
  const Q = new MinPriorityQueue({ priority: e => e[0] });
  Q.enqueue([0, 0])

  const inMST = new Array(V).fill(false); // visited array
  let sum = 0;

  while (Q.size()) {
    const [wt, node] = Q.dequeue().element;
    if (inMST[node]) continue;
    inMST[node] = true;
    sum += wt;

    for (const [neighbor, neighbor_wt] of adj[node]) {
      if (!inMST[neighbor]) {
        Q.enqueue([neighbor_wt, neighbor]);
      }
    } 
  }
  return sum;
}
function minCostConnectPoints(points) {
  // making adj list
  const V = points.length;
  const adj = Array.from({
    length: V
  }, () => []);

  for (let i = 0; i < V; i++) {
    for (let j = i + 1; j < V; j++) {
      const x1 = points[i][0];
      const y1 = points[i][1];
      const x2 = points[j][0];
      const y2 = points[j][1];

      const d = Math.abs(x1 - x2) + Math.abs(y1 - y2);

      adj[i].push([j, d]);
      adj[j].push([i, d]);
    }
  }
  return primsMinMST(adj, V);
}