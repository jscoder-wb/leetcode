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
            adj[y].push(x);
        }

        let obj = new Solution();
        let ans = obj.isCycle(adj);
        if (ans)
            ans = 1;
        else
            ans = 0;
        console.log(ans);

        console.log("~");
    }
}
// } Driver Code Ends




// User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {boolean}
*/
class Solution {
  detectBFS(node, adj, vis) {
    vis[node] = 1;
    let queue = [];
    queue.push([node, -1])
    while (queue.length) {
      let cur = queue.shift();
      let myNode = cur[0];
      let parent = cur[1];
      for (let item of adj[myNode]) {
        if (!vis[item]) {
          vis[item] = 1;
          queue.push([item, myNode]);
        } else if (parent != item) {
          return true;
        }
      }
    }
    return false;
  }
  detectDFS(node, parent, adj, vis) {
    vis[node] = 1;
    for (let item of adj[node]) {
      if (!vis[item]) {
        if (this.detectDFS(item, node, adj, vis) == true) {
          return true;
        }
      } else if (item != parent) {
        return true;
      }
    }
    return false;
  }
  isCycle(adj) {
    let vis = new Array(adj.length).fill(0);
    for (let i = 0; i < adj.length; i++)
      if (!vis[i])
        if (this.detectDFS(i, -1, adj, vis))
          return true
    return false;
  }
}