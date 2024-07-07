// sliding window approach
function minSubArrayLen(target, nums) {
  let start = 0, end = 0, minValue = Infinity, subarraySum = nums[0];
  
  while(start <= end && subarraySum){
      if(subarraySum >= target){
          minValue = Math.min(minValue, end-start+1);
          subarraySum -= nums[start];
          start++;
      } else {
          end++;
          subarraySum += nums[end];
      }
  }
  return minValue === Infinity ? 0 : minValue;
}