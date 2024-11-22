//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        // Read values array
        let values = readLine().split(' ').map(x => parseInt(x));

        // Read weights array
        let weights = readLine().split(' ').map(x => parseInt(x));

        // Read the knapsack capacity
        let W = parseInt(readLine());

        let ob = new Solution();
        console.log(ob.fractionalknapsack(values, weights, W).toFixed(6));
        console.log("~");
    }
}

class Item {
    constructor(val, weight) {
        this.value = val;
        this.weight = weight;
    }
}

// } Driver Code Ends




// User function Template for javascript
//Back-end complete function Template for javascript
class Solution {
    fractionalknapsack(val, wt, capacity) {
         let arr = []
        for (let i = 0; i < val.length; i++) {
            const value = val[i];
            const weight = wt[i];
            arr.push([value / weight, weight, value]);
        }
        arr.sort((a, b) => b[0] - a[0])
        let max_val = 0;
        let cur_capacity = 0;
        for (let x of arr) {
            const [r,w,v] = x;
            const remaining_wt = capacity - cur_capacity; 
            if (remaining_wt >= w) {
                cur_capacity += w;
                max_val += v;
            } else { 
                const value_to_be_extracted = r * remaining_wt; 
                cur_capacity += remaining_wt;
                max_val += value_to_be_extracted;
                return max_val; 
            }
            if (cur_capacity == capacity) {
                return max_val;
            }
        }
        return max_val;
    }
}