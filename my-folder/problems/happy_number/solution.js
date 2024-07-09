// solution from neetcode
var isHappy = function (n) {
  let seen = new Set();

  while (!seen.has(n)) {
    seen.add(n)
    n = sumOfSquares(n)
    if (n == 1) return true
  }
  return false;
};
function sumOfSquares(num) {
  let str = num.toString();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    sum += (Math.pow(Number(char), 2));
  }
  return sum;
}