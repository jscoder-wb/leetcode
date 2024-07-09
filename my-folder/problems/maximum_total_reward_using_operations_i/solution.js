var maxTotalReward = function (rewardValues) { 
  rewardValues.sort((a, b) => a - b)

  const n = rewardValues.length
  const memo = Array.from({ length: n }, (_, i) => Array(4000).fill(-1))

  return dfs(0, 0)

  function dfs(i, currX) {
    if (i == rewardValues.length) return currX
    if (memo[i][currX] != -1) return memo[i][currX]

    const pick = rewardValues[i] > currX ? dfs(i + 1, rewardValues[i] + currX) : 0
    const notPick = dfs(i + 1, currX)

    return memo[i][currX] = Math.max(pick, notPick) 
  }
};