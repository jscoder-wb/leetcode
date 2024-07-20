// greedy solution
var restoreMatrix = function (rowSum, colSum) {
  const rows = rowSum.length, cols = colSum.length;
  const result = [...Array(rows)].map(() => Array(cols).fill(0));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      result[r][c] = Math.min(rowSum[r], colSum[c]);
      rowSum[r] -= result[r][c];
      colSum[c] -= result[r][c];
    }
  }
  return result;
};