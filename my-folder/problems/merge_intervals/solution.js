var merge = function(intervals) {
  let ans = []
  intervals.sort((a, b) => a[0] - b[0])
  let temp = intervals[0]
  for(let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= temp[1]) temp[1] = Math.max(temp[1], intervals[i][1])
    else {
      ans.push(temp)
      temp = intervals[i]
    }
  }
  ans.push(temp)
  return ans    
};