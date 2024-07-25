// similar to LIS 
var longestArithSeqLength = function (A) {
  let dp = {}, max = 0;

  for (let i = 0; i < A.length; i++) {
    if (dp[i] == null) dp[i] = {}; 
    for (let j = 0; j < i; j++) {
      let diff = A[i] - A[j];
      dp[i][diff] = 1 + (dp[j][diff] || 1);
      max = Math.max(dp[i][diff], max);
    }
  }
  return max;
};