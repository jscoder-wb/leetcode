// 2d dp tabulation solution.   
var uniquePaths = function (m, n) {
  const dp = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < m; ++i) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; ++j) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
// The idea behind this approach is to use a 2D Dynamic Programming (DP) array to store the number of unique paths to each cell. A cell (i,j)(i, j)(i,j) can be reached either from (i−1,j)(i-1, j)(i−1,j) or (i,j−1)(i, j-1)(i,j−1), and thus the number of unique paths to (i,j)(i, j)(i,j) is the sum of the number of unique paths to these two cells.