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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let x = parseInt(readLine());
        let obj = new Solution();
        let res = obj.solve(arr, x);
        console.log(res);
    }
} // } Driver Code Ends
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} stalls
 * @param {number} k
 * @returns {number}
 */

class Solution {
    // Function to solve the problem.
    solve(stalls, k) {
        stalls.sort((a,b)=>a - b);
    let low = 0;
    let high = stalls[stalls.length - 1]
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (canplace(stalls, mid, k)) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return high
    }
}


function canplace(stalls, dist, cows) {
  let cntCows = 1;
  let last = stalls[0];
  for (let i = 1; i < stalls.length; i++) {
    if (stalls[i] - last >= dist) {
      cntCows++;
      last = stalls[i];
    }
    if (cntCows >= cows)
      return true;
  }
  return false;
}
