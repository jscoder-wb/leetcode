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

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let V = parseInt(input_line[0]);
        let E = parseInt(input_line[1]);

        let adj = new Array(V);
        for (let i = 0; i < V; i++) {
            adj[i] = new Array();
        }
        for (let i = 0; i < E; i++) {
            input_line = readLine().split(' ');
            let x = input_line[0];
            let y = input_line[1];
            adj[x].push(y);
        }

        let obj = new Solution();
        let ans = obj.isCyclic(V, adj);
        if (ans)
            ans = 1;
        else
            ans = 0;
        console.log(ans);

        console.log("~");
    }
}

// } Driver Code Ends



class Solution { 
    // cycle detection using toposort bfs (kahns algo) solution
//   isCyclic(v, adj) {
//     let indegree = new Array(v).fill(0); 
//     for (let i = 0; i < v; i++) {
//       for (let itr of adj[i]) {
//         indegree[itr]++;
//       }
//     } 
//     let q = [];
//     for (let i = 0; i < v; i++) {
//       if (indegree[i] === 0) q.push(i);
//     } 
//     let res = []; 
//     while (q.length) {
//       let node = q.shift();
//       res.push(node);
//       for (let itr of adj[node]) {
//         indegree[itr]--;
//         if (indegree[itr] === 0) q.push(itr);
//       }
//     } 
//     if (res.length === v) return false;
//     return true;
//   } 
  // cycle detection using dfs
  isCyclic(V, adj) {
    function dfs(node) {
      recStack[node] = 1;
      visited[node] = 1;
      for (let i = 0; i < adj[node].length; i++) {
        let neighbor = adj[node][i];
        if (!visited[neighbor]) {
          if (dfs(neighbor))
            return true;
        } else if (recStack[neighbor])
          return true;
      }
      recStack[node] = 0;
      return false;
    }
    let visited = Array(V).fill(0)
    let recStack = Array(V).fill(0)

    for (let i = 0; i < V; i++)
      if (!visited[i])
        if (dfs(i))
          return true;
    return false;
  }
}
