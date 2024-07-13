var maximumPoints = function (arr, currentEnergy) {
  let i = 0, j = arr.length - 1, points = 0, energy = currentEnergy
  arr.sort((a, b) => a - b);
  if (energy < arr[0]) return 0;

  while (i <= j) {
    if (energy >= arr[i]) {
      points += Math.floor(energy / arr[i]);
      energy = energy % arr[i];
    } else {
      energy += arr[j];
      j--;
    }
  }
  return points;
};