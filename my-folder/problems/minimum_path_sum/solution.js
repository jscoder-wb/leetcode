// memo solution
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = Array.from({ length: m }, () => Array(n).fill(-1));
  // dp element = min path sum from cell i, j to last cell

  function helper(i, j) {
    if (i === m - 1 && j === n - 1) return dp[i][j] = grid[i][j];
    if (dp[i][j] !== -1) return dp[i][j];

    if (i === m - 1) return dp[i][j] = grid[i][j] + helper(i, j + 1);
    else if (j === n - 1) return dp[i][j] = grid[i][j] + helper(i + 1, j);
    else return dp[i][j] = grid[i][j] + Math.min(helper(i + 1, j), helper(i, j + 1));
  }
  return helper(0, 0);
};