
var countCompleteDayPairs = function (hours) {
  const freq = new Array(24).fill(0);
  let count = 0, n = hours.length
  for (let i = 0; i < n; i++) {
    let r = hours[i] % 24
    if (r == 0) count += freq[0]
    else count += freq[24 - r]
    freq[r]++
  }
  return count
};