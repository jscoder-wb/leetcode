// approach - expand from center
var longestPalindrome = function (s) {
  let longest = ""
  const helper = function (i, j) {
    while (i >= 0 && j < s.length && s[i] === s[j]) {
      i--; j++
    }
    return s.slice(i + 1, j)
  }
  for (let i = 0; i < s.length; i++) {
    let odd = helper(i, i)
    let even = helper(i, i + 1)
    let longerPalindrome = odd.length > even.length ? odd : even
    if (longerPalindrome.length > longest.length) longest = longerPalindrome
  }
  return longest
};