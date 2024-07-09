/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n <= 0) return false
  n = n - 1 
  while (n != 0) { 
    if ((n & 1) == 0) return false
    n = n >> 1
  }  
  return true
};
// practice self coding