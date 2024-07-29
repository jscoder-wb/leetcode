// solution from codeStorywithMIk (floyd warshall)
class Graph {
  constructor(n, edges) {
    this.n = n;
    this.adjMat = Array.from({
      length: n
    }, () => Array(n).fill(Number.MAX_SAFE_INTEGER));

    for (let i = 0; i < n; i++) {
      this.adjMat[i][i] = 0;
    }
    for (const edge of edges) {
      this.adjMat[edge[0]][edge[1]] = edge[2];
    }
    for (let via = 0; via < n; via++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          this.adjMat[i][j] = Math.min(this.adjMat[i][j],
            this.adjMat[i][via] + this.adjMat[via][j]);
        }
      }
    }
  }
  addEdge(edge) {
    if (this.adjMat[edge[0]][edge[1]] <= edge[2]) return
    this.adjMat[edge[0]][edge[1]] = edge[2];

    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.n; j++) {
        this.adjMat[i][j] = Math.min(this.adjMat[i][j],
          this.adjMat[i][edge[0]] + edge[2] + this.adjMat[edge[1]][j]);
      }
    }
  }
  shortestPath(node1, node2) {
    if (this.adjMat[node1][node2] === Number.MAX_SAFE_INTEGER) {
      return -1;
    }
    return this.adjMat[node1][node2];
  }
}