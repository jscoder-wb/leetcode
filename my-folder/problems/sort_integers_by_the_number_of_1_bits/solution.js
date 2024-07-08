var sortByBits = function(arr) {
  return arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b);
};

// counts number of 1 bits in number
const bitCount = num => {
  let count = 0;
  while (num) {
    count += num & 1;
    num = num >> 1;
  }
  return count;
};