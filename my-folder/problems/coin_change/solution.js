// bottom up tabulation method (see neetcode video for clarity)
var coinChange = function(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0; // index is amt val is min number of coins to make that amt
  for(let i = 1; i < dp.length; i++) {
    for(let coin of coins) {
      if(i - coin >= 0) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};