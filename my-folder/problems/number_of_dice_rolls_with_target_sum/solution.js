// dp[n][target] stores the number of ways to obtain the target sum with 'n' dice rolls.
var numRollsToTarget = function (n, k, target) {
  let mod = Math.pow(10, 9) + 7;
  function recursion(n, target) {
    if (target === 0 && n === 0) return 1;
    if (n === 0 || target <= 0) return 0;
    if (dp[n][target] !== -1) return dp[n][target] 

    let ways = 0;
    for (let i = 1; i <= k; i++) 
      ways = (ways + recursion(n - 1, target - i)) % mod;
    
    return dp[n][target] = ways % mod; 
  }
  const dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(-1));
  return recursion(n, target);
};