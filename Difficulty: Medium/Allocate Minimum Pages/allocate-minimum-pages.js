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
        let n = parseInt(readLine());
        let a = new Array(n);
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) a[i] = input_ar1[i];
        let m = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.findPages(a, n, m));
        console.log("~");
    }
}
// } Driver Code Ends





class Solution {
  findPages(arr, n, kstudents) {
    function isPermutationPossible(ans) {
      let student = 1;
      let currPages = 0;
      for (let i = 0; i < n; i++) {
        if (currPages + arr[i] <= ans) 
          currPages += arr[i];
        else {
          student++;
          if (student > kstudents || arr[i] > ans)
            return false;
          currPages = arr[i];
        } 
      }
      return true;
    }
    if (arr.length < kstudents) return -1;
    
    let ans = Infinity;
    let low = 0
      , high = arr.reduce((acc,curr)=>acc + curr);

    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (isPermutationPossible(mid)) {
        ans = mid;
        high = mid - 1;
      } else
        low = mid + 1;
    }
    return ans;
  }
}