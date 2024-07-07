var majorityElement = function (nums) {
  let elem1 = nums[0], elem2 = null, count1 = 1, count2 = 0, res = [];

  for (let i = 1; i < nums.length; i++) {
    if (elem1 == nums[i]) count1++;
    else if (elem2 == nums[i]) count2++;
    else if (count1 == 0) {
      elem1 = nums[i];
      count1 = 1;
    } else if (count2 == 0) {
      elem2 = nums[i];
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }
  let elem1count = 0, elem2count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (elem1 == nums[i]) elem1count++;
    if (elem2 == nums[i]) elem2count++;
  }
  if (elem1count > nums.length / 3) res.push(elem1);
  if (elem2count > nums.length / 3) res.push(elem2);
  return res;
};