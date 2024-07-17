var maximumLength = function (nums, k) {
  let n = nums.length;
  let dp = Array.from({ length: n }, () => Array(k).fill(1));
  let ans = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i; ++j) {
      let mod = (nums[i] + nums[j]) % k;
      dp[i][mod] = Math.max(dp[i][mod], dp[j][mod] + 1);
      ans = Math.max(ans, dp[i][mod]);
    }
  }
  return ans;
};
// any number modulo k always yields 0, 1, 2... k - 1