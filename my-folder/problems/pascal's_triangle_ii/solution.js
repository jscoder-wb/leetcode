// Dynamic Programming solution
// nCr problem
var getRow = function (n) {
  var dp = [1];
  
  for (var i = 1; i <= n; i++) {
    for (var r = i; r > 0; r--) {
      if (r === i) dp[r] = 1;
      else dp[r] = dp[r - 1] + dp[r];
    }
  }
  return dp; // output array = [nC0, nC1... nCn]
};