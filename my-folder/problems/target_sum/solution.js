// 2-D DP memo solution
var findTargetSumWays = function (nums, S) {
  const map = new Map();
  // map[idx-val] = k (it means k is the number of ways we can build target if we start from idx with sum being val)
  function run(idx, sum) {
    if (idx === nums.length) return sum === S ? 1 : 0;
    if (map.has(`${idx}-${sum}`)) return map.get(`${idx}-${sum}`);

    const res = run(idx + 1, sum + nums[idx]) + run(idx + 1, sum - nums[idx]);
    map.set(`${idx}-${sum}`, res);
    return res;
  }
  return run(0, 0);;
};