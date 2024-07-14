// greedy solution from codestorywithmik
var minimumCost = function (m, n, horizontalCut, verticalCut) {
  const x = horizontalCut.length;
  const y = verticalCut.length;

  horizontalCut.sort((a, b) => a - b); 
  verticalCut.sort((a, b) => a - b);  

  let i = x - 1, j = y - 1; // Start from the largest elements
  let horizontalPieces = 1, verticalPieces = 1, result = 0;

  while (i >= 0 && j >= 0) {
    if (horizontalCut[i] >= verticalCut[j]) {
      result += horizontalCut[i] * verticalPieces;
      horizontalPieces++;
      i--;
    } else {
      result += verticalCut[j] * horizontalPieces;
      verticalPieces++;
      j--;
    }
  }
  while (i >= 0) {
    result += horizontalCut[i] * verticalPieces;
    horizontalPieces++;
    i--;
  }
  while (j >= 0) {
    result += verticalCut[j] * horizontalPieces;
    verticalPieces++;
    j--;
  }
  return result;
};