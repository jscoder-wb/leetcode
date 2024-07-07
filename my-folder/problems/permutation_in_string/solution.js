// sliding window approach from neetcode video
var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) return false;
  let s1Count = new Array(26).fill(0), s2Count = new Array(26).fill(0);
  
  for (let i = 0; i < s1.length; i++) {
    s1Count[s1[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
    s2Count[s2[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }
  let matches = 0;
  for (let i = 0; i < 26; i++) {
    if (s1Count[i] === s2Count[i]) matches += 1;
    else matches += 0;
  }
  let l = 0, r = s1.length - 1, charIdx
  while(r < s2.length - 1) {
    if (matches == 26) return true

    // adding a char to window
    charIdx = s2[++r].charCodeAt(0) - "a".charCodeAt(0)
    s2Count[charIdx] += 1
    if (s1Count[charIdx] == s2Count[charIdx]) matches += 1
    else if (s1Count[charIdx] + 1 == s2Count[charIdx]) matches -= 1

    // removing char from window
    charIdx = s2[l++].charCodeAt(0) - "a".charCodeAt(0)
    s2Count[charIdx] -= 1
    if (s1Count[charIdx] == s2Count[charIdx]) matches += 1
    else if (s1Count[charIdx] - 1 == s2Count[charIdx]) matches -= 1
  }
  return matches === 26;
};