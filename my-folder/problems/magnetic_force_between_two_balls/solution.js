// similar to aggresive cows (see babbar video for clarification) 

var maxDistance = function (stalls, k) {
  function canplace(dist) {
    let cntCows = 1;
    let last = stalls[0];
    for (let i = 1; i < stalls.length; i++) {
      if (stalls[i] - last >= dist) {
        cntCows++;
        last = stalls[i];
      }
      if (cntCows >= k)
        return true;
    }
    return false;
  }
  stalls.sort((a, b) => a - b);
  let low = 0;
  let high = stalls[stalls.length - 1]
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (canplace(mid)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high
};