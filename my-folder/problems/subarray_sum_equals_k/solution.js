// prefix sum solution
var subarraySum = function(nums, k) {
  let map = {0: 1}, output = 0, sum = 0; 
  // map stores cumulative sum: frequency
  for (let num of nums) {
    sum += num;
    let prefix = sum - k
    if (map[prefix]) output += map[prefix]; 
    map[sum] ? map[sum]++ : map[sum] = 1
  }
  return output;
};