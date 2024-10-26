// Question : You are given an integer array cost where cost[i] is the cost of ith step on a staircase. For each step 0 <= i < n we have to pay a cost of cost[i] to enter that step. Return the min cost to get to top of the floor ie nth step. We dont have to pay the cost of nth step.  

var minCostClimbingStairs = function(cost) {
    let n = cost.length, dp = [cost[0], cost[1]] // dp[i] = min cost to get to ith step. 
    for(let i = 2; i < n; i++) dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2])
    
    return Math.min(dp[n-1], dp[n-2]);
    // we can either pick the second last step to reach the top by steping 2 steps OR we can pick the last step to reach the top by steping 1 step
};