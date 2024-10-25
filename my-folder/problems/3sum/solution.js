// testing for auto submission to github
var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && (nums[i] === nums[i - 1])) continue; // for removing duplicate triplets
    let j = i + 1, k = nums.length - 1;

    while (j < k) {
      let total = nums[i] + nums[j] + nums[k];
      if (total > 0) k--;
      else if (total < 0) j++;
      else {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        while (nums[j] === nums[j - 1] && j < k) j++; // for removing duplicate triplets
      }
    }
  }
  return res;
};