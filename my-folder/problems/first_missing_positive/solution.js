var firstMissingPositive = function (nums) {
  let n = nums.length;
  const seen = new Array(n + 1).fill(false);
  for (const num of nums) {
    if (num > 0 && num <= n) {
      seen[num] = true;
    }
  }
  for (let i = 1; i <= n; i++) {
    if (!seen[i]) {
      return i;
    }
  }
  return n + 1;
};
// editorial solution