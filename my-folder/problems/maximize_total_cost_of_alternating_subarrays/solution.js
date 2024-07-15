var maximumTotalCost = function (nums) {
  const dp = Array.from({
    length: nums.length
  }, () => new Array(2));

  function findMax(idx, prevSign) {
    if (idx == nums.length)
      return 0;
    if (dp[idx][prevSign] != null)
      return dp[idx][prevSign];
    let max = -Infinity;
    if (prevSign == 1)
      max = Math.max(nums[idx] + findMax(idx + 1, 1), -nums[idx] + findMax(idx + 1, 0));
    else
      max = nums[idx] + findMax(idx + 1, 1);
    dp[idx][prevSign] = max;
    return max;
  }
  return nums[0] + findMax(1, 1);
};