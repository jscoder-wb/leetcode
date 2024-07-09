var specialArray = function (nums) {
  const check = (nums, x) => {
    let count = 0;
    for (let num of nums) {
      if (x <= num) {
        count++;
      }
    }
    return count;
  }
  for (let i = 0; i <= nums.length; i++) {
    if (check(nums, i) === i) {
      return i;
    }
  }
  return -1;
};