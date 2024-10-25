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
    let i = 0;
    for (; i < t; i++) {
        let N;
        N = parseInt(readLine());
        let matrix = [];
        for (let i = 0; i < N; ++i) {
            let row = readLine().trim().split(" ").map((x) => parseInt(x));
            matrix.push(row);
        }
        let obj = new Solution();
        obj.shortestDistance(matrix);
        for (let i = 0; i < N; i++) {
            let s = "";
            for (let j = 0; j < N; j++) s += matrix[i][j] + " ";
            console.log(s);
        }

        console.log("~");
    }
}
// } Driver Code Ends


// User function template for javascript
/**
 * @param {number[][]} matrix
 * @returns {number}
 */

class Solution {
    // codestorywihmik
    shortestDistance(grid) {
        const n = grid.length; 
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === -1)
          grid[i][j] = 100000;
      }
    } 
    for (let via = 0; via < n; via++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          grid[i][j] = Math.min(grid[i][j], grid[i][via] + grid[via][j]);
        }
      }
    } 
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 100000)
          grid[i][j] = -1;
      }
    }
    return grid
    }
}