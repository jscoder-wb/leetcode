// bit manipulation 
var bitwiseComplement = function(n) {
  // if n ^ n` = C then n` = n ^ C 
  // xor of number with its complement equals 11111... (length is same as number length), to find length of C we << number's length by 1 then -1 
  return n === 0 ? 1 : ((1 << (Number(n).toString(2)).length) - 1) ^ n
};