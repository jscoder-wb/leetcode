function maxProduct(nums) {
  let localMin = nums[0], localMax = nums[0], result = nums[0]
  
  for (let i = 1; i < nums.length; i++) {
    const args = [nums[i], localMax * nums[i], localMin * nums[i]]
    localMax = Math.max(...args)
    localMin = Math.min(...args)
    result = Math.max(result, localMax)
  }
  return result;
}