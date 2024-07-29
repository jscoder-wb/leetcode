/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// Dijkstra algorithm
class Graph {
  constructor(n, edges) {
    this.adj = []
    this.n = n
    for (let [from, to, wt] of edges) {
      if (!this.adj[from])
        this.adj[from] = []
      this.adj[from].push([to, wt])
    }
    // filling empty array for nodes which point to nothing
    for (let i = 1; i <= n; i++)
      if (!this.adj[i])
        this.adj[i] = []
  }
  shortestPath(node1) {
    const visited = {}
    const output = [] // output[i] = shortest dist from start node to <i>
    const queue = [] // queue will store shortest dist from point a to point b

    for (let i = 1; i <= this.n; i++) {
      if (i === node1) {
        output[i] = 0
        queue.push({ from: node1, to: i, dist: 0 })
      } else output[i] = Infinity
    }

    while (queue.length) {
      const { to: node } = queue.shift()
      if (!visited[node]) {
        visited[node] = true

        for (const [neighbor, wt] of this.adj[node]) {
          let newDist = output[node] + wt
          if (newDist < output[neighbor]) {
            output[neighbor] = newDist
            queue.push({ from: node1, to: neighbor, dist: newDist })
          }
        }
        queue.sort((a, b) => a.dist - b.dist)
      }
    }
    return output
  }
}
var networkDelayTime = function (times, n, k) {
  let ob = new Graph(n, times)
  let shortestPaths = ob.shortestPath(k)
  shortestPaths.shift() // because graph starts from 1 to n

  let ans = Math.max(...shortestPaths)
  if (ans === Infinity) return -1
  else return ans
};