// knapsack pattern problem (include/ exclude)
var maxSatisfaction = function (satisfaction) {
  function helper(index, time) {
    if (index === satisfaction.length) return 0;
    if (dp[index][time] !== -1) return dp[index][time];

    const include = satisfaction[index] * time + helper(index + 1, time + 1);
    const exclude = 0 + helper(index + 1, time);

    return dp[index][time] = Math.max(include, exclude);
  }
  satisfaction.sort((a, b) => a - b);
  let index = 0, time = 1, n = satisfaction.length;
  let dp = Array.from({
    length: n
  }, () => Array(n + 1).fill(-1));

  return helper(index, time);
};