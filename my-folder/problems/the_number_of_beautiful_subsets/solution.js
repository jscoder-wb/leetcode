// solution from neetcode 
var beautifulSubsets = function (nums, k) {
  let count = {}
  const helper = function (i) {
    if (i == nums.length) return 1
    let res = helper(i + 1)

    if (!count[nums[i] + k] && !count[nums[i] - k]) {
      count[nums[i]] ? count[nums[i]]++ : count[nums[i]] = 1
      res += helper(i + 1)
      count[nums[i]] -= 1
    }
    return res
  }
  return helper(0) - 1 // 1 is for empty subset
};