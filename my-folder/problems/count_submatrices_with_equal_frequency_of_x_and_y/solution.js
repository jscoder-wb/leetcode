// prefix sum solution
function numberOfSubmatrices(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  function helper(ch) {
    const M = Array.from({
      length: rows
    }, () => Array(cols).fill(0));

    for (let row = 0; row < rows; ++row) {
      for (let col = 0; col < cols; ++col) {
        M[row][col] = grid[row][col] === ch ? 1 : 0;
        if (row > 0) M[row][col] += M[row - 1][col];
        if (col > 0) M[row][col] += M[row][col - 1];
        if (row > 0 && col > 0) M[row][col] -= M[row - 1][col - 1];
      }
    }
    return M;
  }
  const X = helper('X');
  const Y = helper('Y');
  let ans = 0;
  for (let row = 0; row < rows; ++row)
    for (let col = 0; col < cols; ++col)
      if (X[row][col] === Y[row][col] && X[row][col] > 0)
        ans++;
  return ans;
}