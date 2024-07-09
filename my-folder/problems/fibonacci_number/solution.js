/**
 * @param {number} n
 * @return {number}
 */
// bottom up tabulation approach (dynamic programming)  
var fib = function(n) {
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};