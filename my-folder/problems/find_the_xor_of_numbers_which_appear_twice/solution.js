/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
  let map = {}
  for (let elem of nums) {
    map[elem] ? map[elem]++ : map[elem] = 1
  } 
  let result = 0
  for (let [key, val] of Object.entries(map)) {
    if (val == 2) result = result ^ key 
  }
  return result
};
// 1: 2
// 2: 2