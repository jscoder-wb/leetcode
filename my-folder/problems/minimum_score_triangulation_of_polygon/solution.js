// Recursion + memoization (Top down approach)
// watch babbar video for understanding
var minScoreTriangulation = function (values) {
  let n = values.length;
  let dp = new Array(n).fill(-1).map(() => Array(n).fill(-1));
  return solveMem(0, n - 1);

  function solveMem(i, j) {
    if (i + 1 === j) return 0; // base case
    if (dp[i][j] !== -1) return dp[i][j];
    let ans = Infinity;
    for (let k = i + 1; k < j; k++) {
      ans = Math.min(
        ans,
        values[i] * values[j] * values[k] +
        solveMem(i, k) +
        solveMem(k, j)
      );
    }
    return dp[i][j] = ans;
  }
};