var minDistance = function(a, b) {
  const dp = Array.from(Array(a.length), () => Array(b.length).fill(-1))

  const solve = function(i, j) {
    if (i === a.length) return b.length - j
    if (j === b.length) return a.length - i
    if (dp[i][j] !== -1) return dp[i][j]
    let ans = 0
    if (a[i] == b[j]) return solve(i + 1, j + 1)
    else {
      let insertAns = solve(i, j + 1) + 1
      let deleteAns = solve(i + 1, j) + 1
      let replaceAns = solve(i + 1, j + 1) + 1
      ans = Math.min(insertAns, deleteAns, replaceAns)
    }
    return dp[i][j] = ans 
  }
  return solve(0, 0)
};
// solution from love babbar