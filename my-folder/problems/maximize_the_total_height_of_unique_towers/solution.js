var maximumTotalSum = function (maximumHeight) {
  const n = maximumHeight.length; 
  maximumHeight.sort((a, b) => b - a);

  let currentHeight = maximumHeight[0];
  let totalSum = 0; 

  for (let i = 0; i < n; i++) { 
    if (currentHeight > maximumHeight[i]) 
      currentHeight = maximumHeight[i];

    if (currentHeight <= 0) return -1
    totalSum += currentHeight;
    currentHeight--;
  }
  return totalSum;
};