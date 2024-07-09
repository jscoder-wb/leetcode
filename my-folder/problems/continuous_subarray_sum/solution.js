// solution from codestory
var checkSubarraySum = function (nums, k) {
  const n = nums.length;
  if (n < 2) return false;
  const map = new Map();
  map.set(0, -1);
  let sum = 0;

  for (let i = 0; i < n; ++i) {
    sum += nums[i];
    sum = sum % k; 
    
    // if we are seeing a remainder again that means we have a good subarray
    if (map.has(sum) && i - map.get(sum) >= 2)
      return true;
    else if (!map.has(sum))
      map.set(sum, i);
  }
  return false;
}