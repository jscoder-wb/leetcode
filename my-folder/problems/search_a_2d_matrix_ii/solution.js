var searchMatrix = function(matrix, target) {
  let rowIndex = 0,
    columnIndex = matrix[0].length - 1;

  while (rowIndex < matrix.length && columnIndex >= 0) {
    if (matrix[rowIndex][columnIndex] === target) return true;
    if (matrix[rowIndex][columnIndex] < target) rowIndex++;
    else columnIndex--;
  }
  return false;
};