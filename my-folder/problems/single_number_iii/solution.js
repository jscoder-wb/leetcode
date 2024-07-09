// bit manipulation solution from pepcoding
var singleNumber = function(nums) {
  let xorOfAll = nums.reduce((acc, cur) => acc ^ cur, 0);

  let rightMostSigBitMask = xorOfAll & -xorOfAll

  let firstNumber, secondNumber
  nums.forEach(num => {
    if( (num & rightMostSigBitMask) == 0) firstNumber ^= num
    else secondNumber ^= num
  })
  return [firstNumber, secondNumber];
};

/*
num binary
    1 = 001 
    1 = 001 seperating 0's 
  * 5 = 101 
  
    2 = 010 
    2 = 010 and 1's
  * 3 = 011 
rmsbm = 010 (focus on middle bit)
*/