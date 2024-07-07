// Kadane's algorithm
var maxSubArray = function (nums) {
  let sum = 0, ans = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    ans = Math.max(ans, sum);
    if (sum < 0) sum = 0;
  }
  return ans;
};
// watch babbar vid for understanding