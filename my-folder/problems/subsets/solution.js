// backtracking solution
function subsets(nums) {
  function solve(index, subset) {
    if (index >= nums.length) {
      ans.push([...subset]);
      return;
    }
    solve(index + 1, subset);

    const element = nums[index];
    subset.push(element);
    solve(index + 1, subset);
    subset.pop();
  }
  const ans = [];
  solve(0, []);
  return ans;
}