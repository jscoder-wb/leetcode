/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// reverse solution
var rotate = function (nums, k) {
  k = k % nums.length
  function reverse(left, right) {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      right--, left++
    }
  }
  reverse(0, nums.length - 1) // full array // 7 6 5 4 3 2 1
  reverse(0, k - 1) // reverse first k elements
  reverse(k, nums.length - 1) // reverse last elements
};
// self coded