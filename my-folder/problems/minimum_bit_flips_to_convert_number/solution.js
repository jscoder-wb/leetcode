// bit manipulation solution from pepcoding
var minBitFlips = function(start, goal) {
  let bits = start ^ goal,
      count = 0;
  // take the xor of start and goal. 
  // (if bits = 1101, 1 indicates we have to flip bit in start to make goal)
  // Count number of set bits(1)
  while (bits) {
    count += bits & 1;
    bits >>>= 1;
  }
  return count;
}