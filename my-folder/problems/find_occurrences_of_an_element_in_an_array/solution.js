/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function (nums, queries, x) {
  let temp = [] // rename it
  let output = []
  for (let i = 0; i < nums.length; i++) {
    if (x == nums[i]) temp.push(i)
  }
  for (let i = 0; i < queries.length; i++) {
    if (temp[queries[i] - 1] !== undefined) output[i] = temp[queries[i] - 1]
    else output[i] = -1
  }
  return output
};
// if x == num
// result push (i) // 0   2
//                 // 1st 2nd
//                 // 0   1

// loop queries 
// result[num - 1] 