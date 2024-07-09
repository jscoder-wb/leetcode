// neetcode solution
var matrixScore = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  // if msb of any row is 0 we flip
  for (let row = 0; row < rows; row++) {
    if (grid[row][0] == 0) {
      for (let col = 0; col < cols; col++) {
        grid[row][col] = grid[row][col] == 1 ? 0 : 1
      }
    }
  }

  for (let col = 0; col < cols; col++) {
    let one_count = 0
    for (let row = 0; row < rows; row++) {
      one_count += grid[row][col]
    } 
    // if 1 count < 0 count we flip
    if (one_count < rows - one_count) {
      for (let row = 0; row < rows; row++) {
        grid[row][col] = grid[row][col] == 1 ? 0 : 1
      }
    }
  }
  let res = 0
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      res += grid[row][col] << cols - col - 1
    }
  }
  return res;
};