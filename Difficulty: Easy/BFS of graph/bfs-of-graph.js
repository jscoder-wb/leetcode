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
            let x = parseInt(input_line[0]);
            let y = parseInt(input_line[1]);
            adj[x].push(y);
            adj[y].push(x);
        }

        let obj = new Solution();
        let ans = obj.bfsOfGraph(adj); // Removed passing V
        let s = "";
        for (let i = 0; i < ans.length; i++) {
            s += ans[i] + " ";
        }
        console.log(s.trim());
    }
}

// } Driver Code Ends


// User function Template for javascript
class Solution {
    // Function to return Breadth First Traversal of given graph.
    bfsOfGraph(adj) {
           let vis = new Array(adj.length).fill(0);
       vis[0] = 1;
       let q = [0];
       let bfs = [];
       
       while(q.length){
           let node = q.shift();
           bfs.push(node);
           for(let n of adj[node]){
               if(!vis[n]){
                   vis[n] = 1;
                   q.push(n);
               }
           }
       }
       
       return bfs;
    }
}