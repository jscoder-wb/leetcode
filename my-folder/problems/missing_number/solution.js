var missingNumber = function (nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2; // sums 0 to n

  let actualSum = 0;
  for (let i = 0; i < nums.length; i++) actualSum = actualSum + nums[i]

  return expectedSum - actualSum
};