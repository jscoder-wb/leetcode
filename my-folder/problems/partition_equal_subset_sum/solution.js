var canPartition = function (nums) {
  const dfs = (sum, idx) => {
    if (sum === 0) return true
    if (sum < 0 || idx === nums.length) return false
    if (memo.has(`${idx}-${sum}`)) return memo.get(`${idx}-${sum}`)
    let res = dfs(sum - nums[idx], idx + 1) || dfs(sum, idx + 1)
    memo.set(`${idx}-${sum}`, res)
    return res
  }
  let sum = nums.reduce((acc, cur) => acc + cur)
  if (sum % 2 === 1) return false
  sum /= 2
  let memo = new Map()
  return dfs(sum, 0)
}