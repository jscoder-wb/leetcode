var minimumAverage = function (nums) {
  nums.sort((a, b) => a - b);
  let averages = [];

  while (nums.length > 0) {
    let minElement = nums.shift();
    let maxElement = nums.pop();
    let avg = (minElement + maxElement) / 2;
    averages.push(avg);
  }
  return Math.min(...averages);
};
