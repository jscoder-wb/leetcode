// solution from codestory
var minDays = function (bloomDay, m, k) {
  if (m * k > bloomDay.length) return -1; 
  const canMakeBouquets = (day) => {
    let total = 0; // total bouqets
    let flowers = 0; // flowers in a particular bouqet
    for (let b of bloomDay) {
      if (b <= day) {
        flowers++;
        if (flowers == k) {
          total++;
          flowers = 0;
        }
      } else flowers = 0; 
      if (total >= m) return true;
    }
    return false;
  }; 
  let low = 1, high = Math.max(...bloomDay), result = -1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (canMakeBouquets(mid)) {
      result = mid
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  } 
  return result;
};