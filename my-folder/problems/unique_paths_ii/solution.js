// memo solution
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length, n = obstacleGrid[0].length
  let dp = Array.from({
    length: m
  }, () => Array(n).fill(-1));

  // dp[i][j] indicates number of ways to get to last cell from cell(i, j)
  function solve(i, j) {
    if (i >= m || j >= n || obstacleGrid[i][j] == 1) return 0;
    if (i === m - 1 && j === n - 1) return 1;
    if (dp[i][j] !== -1) return dp[i][j]

    return dp[i][j] = solve(i + 1, j) + solve(i, j + 1);
  }
  return solve(0, 0)
};