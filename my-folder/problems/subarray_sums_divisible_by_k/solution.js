// solution from codestory
var subarraysDivByK = function (nums, k) {
  let n = nums.length, count = 0, sum = 0, mp = new Map();
  mp.set(0, 1);

  for (let num of nums) {
    sum += num;
    let remain = (sum % k);
    if (remain < 0) remain += k
    // if we are seeing a remainder again that means we have subarray/s divisible by k
    if (mp.has(remain)) count += mp.get(remain);
    mp.set(remain, (mp.get(remain) || 0) + 1);
  }
  return count;
};