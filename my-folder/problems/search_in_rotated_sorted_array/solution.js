function findMin(nums) {
  let left = 0, right = nums.length - 1, mid

  while (left < right) {
    mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[right]) left = mid + 1
    else right = mid
  }
  return left
}
var search = function (nums, target) {
  let pivot = findMin(nums)
  let left = 0, right = pivot - 1, mid = -1
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (nums[mid] == target) return mid
    else if (nums[mid] > target) right = mid - 1
    else left = mid + 1
  }
  left = pivot, right = nums.length - 1
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (nums[mid] == target) return mid
    else if (nums[mid] > target) right = mid - 1
    else left = mid + 1
  }
  return -1
};
// practice self coding