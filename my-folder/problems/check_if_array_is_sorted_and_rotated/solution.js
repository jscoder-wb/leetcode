// if array is sorted and rotated then there is only 1 time when nums[i] > nums[i+1] % nums.length
var check = function(nums) {
    let k = 0
    for (let i = 0; i < nums.length; i++)
      if (nums[i] > nums[(i + 1) % nums.length] ) k++
    
    return k <= 1
};