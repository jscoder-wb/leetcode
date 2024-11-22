//{ Driver Code Starts
// Initial Template for JavaScript
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
    let testCases = parseInt(readLine());
    for (let i = 0; i < testCases; i++) {
        let inputLine = readLine().split(' ');
        let capacity = parseInt(inputLine[0]); // Capacity of the knapsack

        let values = readLine().split(' ').map(x => parseInt(x)); // Values of the items
        let weights =
            readLine().split(' ').map(x => parseInt(x)); // Weights of the items

        let solution = new Solution();
        let maxValue = solution.knapSack(capacity, values, weights); // Maximum value
        if (maxValue === -0) maxValue = 0; // Handle potential -0
        console.log(maxValue);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} capacity
 * @param {number[]} val
 * @param {number[]} wt
 * @returns {number}
 */

class Solution {
    // Function to return max value that can be put in knapsack of capacity.
    knapSack(capacity, val, wt) {
        function f(capacity, index) {
        if (index >= val.length || capacity < 0)
            return 0;
        let include = 0;
        if (capacity - wt[index] >= 0)
            include = val[index] + f(capacity - wt[index], index + 1);
        let exclude = f(capacity, index + 1);
        return Math.max(include, exclude);
    }
    return f(capacity, 0)
    }
}
