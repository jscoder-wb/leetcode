// from love babbar
var mctFromLeafValues = function (arr) {
  let dp = [];
  let dfs = function (i, j) {
    if (!dp[i]) dp[i] = [];
    if (j == i) return 0;
    if (dp[i][j]) return dp[i][j];

    let res = Number.MAX_VALUE;
    for (let k = i; k < j; k++) {
      res = Math.min(res, dfs(i, k) +
        dfs(k + 1, j) +
        Math.max(...arr.slice(i, k + 1)) * Math.max(...arr.slice(k + 1, j + 1)));
    }
    return dp[i][j] = res;
  }
  return dfs(0, arr.length - 1);
};