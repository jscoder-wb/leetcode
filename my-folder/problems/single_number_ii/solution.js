// solution from striver video
var singleNumber = function(nums) {
  let ans = 0
  for (bitIndex = 0; bitIndex < 32; bitIndex++) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] & (1 << bitIndex)) count++
    }
    if ((count % 3) == 1) ans = ans | (1 << bitIndex)
  }
  return ans
};