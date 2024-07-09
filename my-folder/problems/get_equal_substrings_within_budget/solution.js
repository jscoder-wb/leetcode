// sliding window solution
var equalSubstring = function (s, t, maxCost) {
  let n = s.length, start = 0, currentCost = 0, maxLength = 0;

  for (let end = 0; end < n; end++) {
    currentCost += Math.abs(s.charCodeAt(end) - t.charCodeAt(end));

    while (currentCost > maxCost) {
      currentCost -= Math.abs(s.charCodeAt(start) - t.charCodeAt(start));
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
};