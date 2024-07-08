// Backtracking approach
var permute = function(nums) {
  const result = [];
  const dfs = (i) => {
    if (i === nums.length) {
      result.push(nums.slice()); // slice() creates a copy of nums arr
      return;
    }
    for (let j = i; j < nums.length; j++) {
      if (j !== i) [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1);
      if (j !== i) [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };
  dfs(0);
  return result;
};