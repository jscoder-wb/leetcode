//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar = readLine().split(' ').map(x=>parseInt(x));
        let k = input_ar[0];
        let n = input_ar[1];
        
        let arr = new Array(n);
        input_ar = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar[i];
        
        let obj = new Solution();
        let ans=obj.minTime(arr, n, k);
        if(ans==-0)
        ans=0;
        console.log(ans);
    
console.log("~");
}
}
// } Driver Code Ends








//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/
class Solution {
    minTime(arr, n, m)
    {
    //   if (n < m) return -1;
      let max;
      let low = arr[n - 1], high = arr.reduce((acc, curr) => acc + curr);
    
      while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (isPermutationPossible(arr, n, m, mid)) {
          max = mid;
          high = mid - 1;
        }
        else low = mid + 1;
      }
      return max;
    }
}
function isPermutationPossible(arr, n, m, max) {
  let painters = 1;
  let pbc = 0;
  for (let i = 0; i < n; i++) {
    if(arr[i] > max) return false;
    if (pbc + arr[i] > max) {
      painters++;
      if (painters > m) return false;
      pbc = arr[i];
    }
    else pbc += arr[i];
  }
  return true;
}