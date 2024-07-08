var validMountainArray = function (arr) {
  if (arr.length <= 2) return false;
  let isDecreasing = false, isIncreasing = false;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) return false
    else if (arr[i] < arr[i + 1]) {
      isIncreasing = true;
      if (isDecreasing) return false;
    } else isDecreasing = true
  }
  return isIncreasing && isDecreasing;
};