// 2-D DP memo solution 
var maximalSquare = function (matrix) {
  if (matrix.length == 0 || matrix[0].length == 0) return 0;
  let height = matrix.length, width = matrix[0].length;
  let memo = new Array(height).fill(0).map(() => new Array(width));
  let max = 0;

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (matrix[row][col] == 1) {
        let len = getMaxSquareLength(row, col);
        max = Math.max(max, len ** 2);
      }
    }
  }
  return max;
  
  function getMaxSquareLength(row, col) {
    if (row < 0 || row >= memo.length || col < 0 ||
      col >= memo[0].length || matrix[row][col] == 0) return 0;
    if (memo[row][col]) return memo[row][col];
    else {
      return memo[row][col] = Math.min(
        getMaxSquareLength(row, col + 1),
        getMaxSquareLength(row + 1, col),
        getMaxSquareLength(row + 1, col + 1)) + 1;

    }
  }
};