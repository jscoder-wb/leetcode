// bit manipulation solution

// n left shift by x is n * 2 to the power x
// n >> x = n / 2 to the power x
let divide = function (dividend, divisor) {
  let isNegative = false; 
  if (dividend < 0) {
    isNegative = !isNegative;
    dividend = -dividend;
  }
  dividend = BigInt(dividend);
  if (divisor < 0) {
    isNegative = !isNegative;
    divisor = -divisor;
  }
  divisor = BigInt(divisor);

  let result = BigInt(0);
  while (dividend - divisor >= 0) {
    let count = BigInt(0);
    while (dividend - (divisor << (count + 1n)) >= 0) {
      count++;
    }
    result += 1n << count;
    dividend -= divisor << count;
  }
  if (isNegative) result = -result;

  if (result > 2 ** 31 - 1) return 2 ** 31 - 1;
  else if (result < -(2 ** 31)) return -(2 ** 31);
  return result;
};