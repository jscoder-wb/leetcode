let minOperations = function (nums) {
  let flag = true, res = 0;
  
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] ^ flag) {
      flag = !flag;
      ++res;
    }
  }
  return res;
};