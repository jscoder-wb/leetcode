var kthSmallestPrimeFraction = function(arr, k) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      result.push({
        pair: [arr[i], arr[j]],
        value: arr[i] / arr[j],
      })
    }
  }
  result.sort((a,b)=>a.value - b.value)
  return result[k - 1].pair
};
// n^2 time complexity solution