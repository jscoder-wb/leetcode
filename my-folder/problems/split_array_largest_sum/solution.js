// binary search solution (book allocation problem)
var splitArray = function (arr, kstudents) {
  function isPossibleSolution(ans) {
    let student = 1;
    let currPages = 0;
    for (let i = 0; i < arr.length; i++) {
      if (currPages + arr[i] <= ans)
        currPages += arr[i];
      else {
        student++;
        if (student > kstudents || arr[i] > ans)
          return false;
        currPages = arr[i];
      }
    }
    return true;
  }
  if (arr.length < kstudents) return -1;
  let ans = Infinity;
  let low = 0
    , high = arr.reduce((acc, curr) => acc + curr);

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (isPossibleSolution(mid)) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return ans;
};