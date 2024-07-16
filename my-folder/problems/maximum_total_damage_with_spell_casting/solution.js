var maximumTotalDamage = function (power) {
  let map = new Map();
  for (let ele of power) {
    if (map.has(ele)) map.set(ele, map.get(ele) + 1)
    else map.set(ele, 1);
  }
  let arr = Array.from(map.keys()).sort((a, b) => a - b);
  let n = arr.length;
  let dp = new Array(n + 1).fill(0);

  // dp[i] indicates the max damage from index i to the end
  for (let i = n - 1; i >= 0; i--) {
    let exclude = dp[i + 1]

    let include = arr[i] * map.get(arr[i]);
    let next = i + 1;
    while (next < arr.length && (arr[next] === arr[i] + 1 || arr[next] === arr[i] + 2))
      next++;
    if (next < n) include += dp[next];

    dp[i] = Math.max(include, exclude);
  }
  return dp[0];
};