// 2 pointer solution
var removeDuplicates = function(nums) {
  let swapIdx = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 2]) {
      nums[swapIdx] = nums[i]
      swapIdx++
    }
  } return swapIdx
};
// self coded