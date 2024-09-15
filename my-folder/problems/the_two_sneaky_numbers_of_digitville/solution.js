/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (arr) {
  const seen = new Set();
  let duplicates = [];

  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.push(num);
      if (duplicates.length === 2) {
        break;
      }
    } else {
      seen.add(num);
    }
  }
  return duplicates;
};