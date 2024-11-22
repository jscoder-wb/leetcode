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
        let m = parseInt(readLine());
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.findMinDiff(arr, m);
        console.log(res);
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends




// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} m
 * @returns {number}
 */

class Solution {
    findMinDiff(arr, n) {
        // code here
        if(n===0||arr.length===0||n>arr.length){
            return -1;
        }
        arr.sort((a,b)=>a-b)
        let minDiff=Infinity;
        for(let i=0;i+n-1<arr.length;i++){
            let diff=arr[i+n-1]-arr[i]
            minDiff=Math.min(minDiff,diff)
        }
        return minDiff;
    }
}
