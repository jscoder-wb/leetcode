var lengthOfLIS = function(nums) {
  const dp = (new Array(nums.length)).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }
  return Math.max(...dp);
};

// dp element indicates uss position tak 0 index se length of longest I S 