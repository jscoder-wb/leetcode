// bottom up dynamic programming
var minCostClimbingStairs = function(cost) {
    let n = cost.length; 
    let dp = [cost[0], cost[1]] // ith val represents min cost to react that step 
    
    for(let i = 2; i < n; i++) {
     dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2])
    }
    // we can either pick the second last step to reach the top by steping 2 steps OR we can pick the last step to react the top by steping 1 step
    return Math.min(dp[n-1], dp[n-2])
};