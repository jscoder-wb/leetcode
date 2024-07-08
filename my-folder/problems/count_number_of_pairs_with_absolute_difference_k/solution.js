var countKDifference = function(nums, k) {
  nums.sort((a,b)=>a - b)
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) == k) count++
    }
  }
  return count;
};