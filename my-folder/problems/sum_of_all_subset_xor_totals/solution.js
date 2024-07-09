var subsetXORSum = function (nums) {
  return findSum(nums, 0, 0);
};

function findSum(nums, curInd, curNum) {
  if (curInd === nums.length) {
    return curNum;
  }

  let includeInXor = findSum(nums, curInd + 1, curNum ^ nums[curInd]);
  let notIncludeInXor = findSum(nums, curInd + 1, curNum);

  return includeInXor + notIncludeInXor;
}