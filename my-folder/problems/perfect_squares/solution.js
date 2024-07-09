function numSquares(n) {
  let dp = [];
  function numSqMemo(n) {
    if (n <= 0) return 0;
    if (dp[n]) return dp[n];
    let sqrt = Math.floor(Math.sqrt(n));
    let min = Infinity;

    for (let i = 1; i <= sqrt; i++) {
      const reducedN = n - i ** 2;
      dp[reducedN] = numSqMemo(reducedN);
      min = Math.min(min, dp[reducedN] + 1);
    }
    return dp[n] = min;
  }
  return numSqMemo(n);
}