var longestCommonPrefix = function(strs) {
  strs.sort()  
  let first = strs[0], last = strs[strs.length - 1], count = 0

  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) count++;
    else break;
  }
  return first.substring(0, count);  
};