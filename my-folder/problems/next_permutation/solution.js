var nextPermutation = function (nums) {
  let nextLargeElement = (idx) => {
    for (i = nums.length - 1; i > idx; i--) if (nums[i] > nums[idx]) return i
  }
  let reverse = (idx) => {
    let start = idx,
      end = nums.length - 1
    while (start < end) {
      ;[nums[start], nums[end]] = [nums[end], nums[start]]
      start++
      end--
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      let nextLarge = nextLargeElement(i)
      ;[nums[i], nums[nextLarge]] = [nums[nextLarge], nums[i]]
      reverse(i + 1)
      return
    }
  }
  reverse(0)
}