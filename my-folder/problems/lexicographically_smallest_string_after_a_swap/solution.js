var getSmallestString = function (s) {
  var arr = s.split("").map(Number);
  for (var i = 1; i < arr.length; ++i) {
    if ((arr[i - 1] & 1) === (arr[i] & 1) && arr[i - 1] > arr[i]) {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      break;
    }
  }
  return arr.join("");
};
// swapping is done only once for a input