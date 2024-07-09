// prefix sum solution from codestory
var numberOfSubarrays = function (nums, k) {
  let mp = new Map(), res = 0, oddCount = 0;
  mp.set(oddCount, 1);

  for (let i = 0; i < nums.length; i++) {
    oddCount += (nums[i] % 2);
    if (mp.has(oddCount - k)) res += mp.get(oddCount - k);
    mp.set(oddCount, (mp.get(oddCount) || 0) + 1);
  }
  return res;
};