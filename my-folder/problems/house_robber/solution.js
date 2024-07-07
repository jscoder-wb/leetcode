// top - Down memoization approach
var rob = function(nums, idx = 0, memo = {}) {
  if (idx in memo) return memo[idx];
  if (idx >= nums.length) return 0;
  
  const sumIfSkipped = rob(nums, idx + 1, memo);
  const sumIfRobbed = nums[idx] + rob(nums, idx + 2, memo);
  
  return memo[idx] = Math.max(sumIfSkipped, sumIfRobbed);
};