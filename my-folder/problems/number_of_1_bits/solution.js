/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0
  while (n) {
    count += n & 1
    n = n >> 1
  }
  return count
};
// self coding practice