// 2 pointer solution 
var removeDuplicates = function (nums) {
  let swapIdx = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[swapIdx] = nums[i]
      swapIdx++
    }
  } return swapIdx
};
// self coded