var isIdealPermutation = function (a) {
  let max = -Infinity;
  for (let i = 0; i < a.length - 2; i++) {
    max = Math.max(a[i], max);
    if (max > a[i + 2]) return false;
  }
  return true;
};
// solution from nick white video