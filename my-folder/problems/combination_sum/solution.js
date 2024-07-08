var combinationSum = function(candidates, target) {
  let result = []
  function helper(index=0, answer=[], sum=0) {
    if (sum === target) result.push([...answer])
    if (sum < target) {
      for (let i = index; i < candidates.length; i++) {
        answer.push(candidates[i])
        helper(i, answer, sum + candidates[i])
        answer.pop()
      }
    }
  }
  helper()
  return result
};