// solution from love babbar
var isMatch = function(s, p) {
  const dp = Array.from(Array(s.length), () => Array(p.length).fill(-1)) 
  const helper = (i, j) => {
    if (i < 0 && j < 0) return true
    if (i >= 0 && j < 0) return false
    if (i < 0 && j >= 0) {
      for (let x = 0; x <= j; x++) 
        if (p[x] != "*") return false
      return true
    }
    if (dp[i][j] != -1) return dp[i][j]
    let ans = false
    if (s[i] === p[j] || p[j] === "?") ans = helper(i - 1, j - 1)
    else if (p[j] === "*") ans = helper(i, j - 1) || helper(i - 1, j)
    return dp[i][j] = ans 
  }
  return helper(s.length - 1, p.length - 1)
};