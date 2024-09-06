var climbStairs = function (n) {
  // its a fibonacci
  let dp = [0, 1, 2] // dp[i] element indicates total ways to reach ith step
  for (let i = 3; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2]
  return dp[n]
};