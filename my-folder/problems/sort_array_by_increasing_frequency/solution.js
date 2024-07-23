/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  let freq = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (freq.get(nums[i])) {
      freq.set(nums[i], freq.get(nums[i]) + 1)
    }
    else {
      freq.set(nums[i], 1)
    }
  }
  return nums.sort((a, b) => freq.get(a) - freq.get(b) || b - a)
};