// 2 pointer solution
var removeElement = function(nums, val) {
  let swapIdx = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      if (i != swapIdx) nums[swapIdx] = nums[i]
      swapIdx++
    }
  } return swapIdx
};
// self coded