var jump = function(nums) {
  let left = 0, right = 0, jump = 0
  while(!(right >= nums.length - 1)){ 
      let max = 0
      for(let i = left; i <= right; i++) max = Math.max(i + nums[i], max)
      left = right + 1
      right = max
      jump++
  }  return jump
};