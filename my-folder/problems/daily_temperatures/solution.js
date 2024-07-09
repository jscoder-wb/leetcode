// monotonic stack solution
var dailyTemperatures = function (nums) {
  const stack = [];
  const ans = []
  for (let i = nums.length - 1; i >= 0; --i) {
    while (stack.length && nums[stack[stack.length - 1]] <= nums[i]) 
      stack.pop();
    ans[i] = stack.length ? stack[stack.length - 1] - i : 0;
    stack.push(i);
  }
  return ans
};