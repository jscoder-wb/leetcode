var numberOfAlternatingGroups = function (colors, k) {
  for (var i = 0; i < k - 1; ++i) colors.push(colors[i]); // appending the first k-1 elements to its end.
  let res = 0, cnt = 1 

  for (var i = 1; i < colors.length; ++i) {
    if (colors[i] == colors[i - 1]) cnt = 1;
    else if (++cnt >= k) ++res;
  }
  return res;
};