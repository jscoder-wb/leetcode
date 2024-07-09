// monotonic deque solution (solution from fraz)
var longestSubarray = function (nums, limit) {
  const maxDeque = [], minDeque = [];
  let s = 0, e = 0, res = 0;
  while (e < nums.length) {
    const num = nums[e];

    while (maxDeque.length && nums[maxDeque[maxDeque.length - 1]] <= num) maxDeque.pop();

    while (minDeque.length && nums[minDeque[minDeque.length - 1]] >= num) minDeque.pop();

    maxDeque.push(e);
    minDeque.push(e);

    if (nums[maxDeque[0]] - nums[minDeque[0]] > limit) {
      ++s;
      if (s > minDeque[0]) minDeque.shift()
      if (s > maxDeque[0]) maxDeque.shift()
    } else {
      res = Math.max(res, e - s + 1);
      e++
    } 
  }
  return res;
}; 