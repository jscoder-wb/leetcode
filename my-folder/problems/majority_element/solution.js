// boyer moore voting algo 
var majorityElement = function(nums) {
  let count = 0, ans
  for (let elem of nums) {
    if (count === 0) {
      ans = elem
      count++
    } else if (elem === ans) { 
      count++
    } else count--
  }
  return ans
};
// self coded