var mincostTickets = function (days, costs) {
  const helper = function (idx) {
    if (idx >= n) return 0;
    if (dp[idx] != -1) return dp[idx]

    let oneDayCost = costs[0] + helper(idx + 1);

    let i;
    for (i = idx; i < n && days[i] < days[idx] + 7; i++);
    let sevenDaysCost = costs[1] + helper(i);

    for (i = idx; i < n && days[i] < days[idx] + 30; i++);
    let thirtyDaysCost = costs[2] + helper(i);

    return dp[idx] = Math.min(oneDayCost, sevenDaysCost, thirtyDaysCost);
  }
  const n = days.length;
  const dp = new Array(n + 1).fill(-1)
  return helper(0);
};