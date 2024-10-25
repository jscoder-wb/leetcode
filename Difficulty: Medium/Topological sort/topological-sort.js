//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function check(V, res, adj) {
    if (V != res.length) return 0;
    let map = new Array(V);
    map.fill(-1);
    for (let i = 0; i < V; i++) {
        map[res[i]] = i;
    }
    for (let i = 0; i < V; i++) {
        for (const v of adj[i]) {
            if (map[i] > map[v]) return 0;
        }
    }
    return 1;
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let m = parseInt(input_line[0]);
        let n = parseInt(input_line[1]);
        let adj = new Array(n);
        for (let i = 0; i < n; i++) {
            adj[i] = new Array();
        }
        for (let i = 0; i < m; i++) {
            input_line = readLine().split(' ');

            let u = parseInt(input_line[0]);
            let v = parseInt(input_line[1]);
            adj[u].push(v);
        }
        let obj = new Solution();
        let res = obj.topologicalSort(adj);
        console.log(check(n, res, adj));
    }
}
// } Driver Code Ends





class Solution {
  // topo sort using bfs ( kahns algo )
  topologicalSort(graph) { 
    const indegree = new Array(graph.length).fill(0); 
    for (const vertex of graph) { 
      for (const neighbor of vertex) {
        indegree[neighbor]++;
      }
    } 
    const queue = [];
    for (const node in indegree) {
      if (indegree[node] === 0) {
        queue.push(node);
      }
    } 
    const sortedOrder = []; 
    while (queue.length) {
      const node = queue.shift();
      sortedOrder.push(node); 
      for (const neighbor of graph[node] || []) {
        indegree[neighbor]--;
        if (indegree[neighbor] === 0) {
          queue.push(neighbor);
        }
      }
    }
    return sortedOrder;
  }
  // toposort using dfs
//   topoSort(V, adjList)
//     {
//     const visited = new Set();
//   const stack = [];

//   const dfs = (vertex)=>{
//     if (visited.has(vertex)) return;
//     visited.add(vertex);
//     for (const neighbor of adjList[vertex] || []) {
//       dfs(neighbor);
//     }
//     stack.push(vertex); 
//   }
//   ;
//   for (let i = 0; i < V; i++) {
//     if (!visited.has(i)) dfs(i)
//   }
//   return stack.reverse(); 
//     }
}

