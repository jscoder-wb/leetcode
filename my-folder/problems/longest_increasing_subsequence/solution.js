// dp + binary search (watch babbar for understanding)
var lengthOfLIS = function (nums) {
  function optimalBinarySearch(nums) {
    if (nums.length === 0)
      return 0;
    let ans = [];
    ans.push(nums[0]);

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > ans[ans.length - 1]) {
        ans.push(nums[i]);
      } else {
        let index = lowerBound(ans, nums[i]);
        ans[index] = nums[i];
      }
    }
    return ans.length;
  }

  function lowerBound(arr, target) {
    let left = 0
      , right = arr.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }
  return optimalBinarySearch(nums);
}; 
