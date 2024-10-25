// general solution for 3sum and 4sum
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  const result = []
  
  function recurse(arr, tar, res, k) {
    if (k === 2) {
      twoSum(arr, tar, res)
      return
    }
    for (let i = 0; i < arr.length; i++) {
      while (arr[i] === arr[i - 1]) i++
      recurse(arr.slice(i + 1), tar - arr[i], [...res, arr[i]], k - 1)
    }
  }
  function twoSum(arr, tar, res) {
    let low = 0, high = arr.length - 1

    while (low < high) {
      const sum = arr[low] + arr[high]
      if (sum === tar) {
        result.push([...res, arr[low], arr[high]])
        
        while (arr[low] === arr[low + 1]) low++
        while (arr[high] === arr[high - 1]) high--
        low++; high--
        
      } else if (sum < tar) low++
      else high--
    }
  }
  recurse(nums, target, [], 4)
  return result
}