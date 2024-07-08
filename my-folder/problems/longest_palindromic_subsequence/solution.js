let longestPalindromeSubseq = function(s) {
  let longestCommonSubsequence = function(text1, text2) {
    const dp = Array.from(Array(text1.length), () => Array(text2.length).fill(-1))
    const helper = (i, j) => {
      if (i < 0 || j < 0) return 0
      if (dp[i][j] !== - 1) return dp[i][j]
      let result = 0
      if (text1[i] === text2[j]) result = helper(i - 1, j - 1) + 1
      else {
        result = Math.max(
          helper(i - 1, j),
          helper(i, j - 1)
        )
      }
      return dp[i][j] = result
    }
    return helper(text1.length - 1, text2.length - 1)
  };
  let reverse = function(s){
    s = s.split('')
    let start = 0, end = s.length - 1
    while (start < end) {
      [s[start], s[end]] = [s[end], s[start]]
      start++; end--
    }
    return s.join('')
  }
  let s1 = s
  let s2 = reverse(s)
  return longestCommonSubsequence(s1, s2)
};