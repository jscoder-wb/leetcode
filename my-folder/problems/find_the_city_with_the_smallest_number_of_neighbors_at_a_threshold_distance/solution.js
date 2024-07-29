var findTheCity = function (n, edges, adjMatanceThreshold) {
  const adjMat = Array.from({ length: n }, () => Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) {
    adjMat[i][i] = 0;
  }
  for (const [u, v, w] of edges) {
    adjMat[u][v] = w;
    adjMat[v][u] = w;
  }

  // Floyd-Warshall algorithm
  for (let via = 0; via < n; via++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        adjMat[i][j] = Math.min(adjMat[i][j],
          adjMat[i][via] + adjMat[via][j])
      }
    }
  } 
  let minReachableCities = Infinity;
  let bestCity = -1;

  for (let i = 0; i < n; i++) {
    let reachableCities = 0;
    for (let j = 0; j < n; j++) {
      if (adjMat[i][j] <= adjMatanceThreshold) {
        reachableCities++;
      }
    } 
    if (reachableCities <= minReachableCities) {
      minReachableCities = reachableCities;
      bestCity = i;
    }
  } 
  return bestCity;
};