// Catalan number using bottom up DP
var numTrees = function(n) {
    let table = new Array(n+1).fill(0)
    table[0] = 1
    table[1] = 1
  
    for(let i = 2;i <= n; i++) {
        for(let j = 0; j < i; j++) {
            table[i] += ( table[j] * table[i-j-1] )
        }
    }
    return table[n] 
};