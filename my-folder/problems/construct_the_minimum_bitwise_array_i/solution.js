var minBitwiseArray = function(nums) {
  const ans = new Array(nums.length).fill(-1);

  for (let i = 0; i < nums.length; i++) {
    let ansValue = 0;
    while (true) {
      if ((ansValue | (ansValue + 1)) === nums[i]) {
        ans[i] = ansValue;
        break;
      }
      ansValue++;
      if (ansValue >= nums[i]) break
    }
  }
  return ans;   
};