// see pepcoding video for logic
// code from cat racket channel https://www.youtube.com/watch?v=orh0B1wWtEI 
var distinctSubseqII = function(s) { 
  const mod = 10 ** 9 + 7, n = s.length, last = {}
  const dp = new Array(n + 1)
  dp[0] = 1  
  for (let i = 1; i <= n; i++) {
    dp[i] = 2 * dp[i - 1] 
    const ch = s[i - 1]
    if (last[ch]) dp[i] -= dp[last[ch] - 1]
    last[ch] = i
    dp[i] %= mod
  }
  dp[n]--
  if(dp[n] < 0) dp[n] += mod
  return dp[n]
};