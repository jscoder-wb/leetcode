var minOperations = function (nums) {
  let n = nums.length, res = 0;
  
  for (let i = 0; i < n - 2; i++) {
    if (nums[i] === 0) {
      nums[i] = 1 // just for clarity
      nums[i + 1] = nums[i + 1] == 1 ? 0 : 1;
      nums[i + 2] = nums[i + 2] == 1 ? 0 : 1;
      res++;
    }
  }
  if (nums[n - 2] === 0 || nums[n - 1] === 0) return -1
  return res;
};
