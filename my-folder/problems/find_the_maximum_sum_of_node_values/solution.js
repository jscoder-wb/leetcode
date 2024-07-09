// greedy approach
var maximumValueSum = function(nums, k, edges) {
  let sum = 0;
  let minLoss = Infinity;
  let count = 0;

  for (const val of nums) {
    if ((val ^ k) > val) {
      sum += val ^ k;
      count++;
    } else {
      sum += val;
    }
    minLoss = Math.min(minLoss, Math.abs((val ^ k) - val));
  }
  return count % 2 === 0 ? sum : sum - minLoss;
};
// see this for understanding https://www.youtube.com/watch?v=QIiQdsVvjNw