var minimumArea = function (grid) {
  const m = grid.length
  const n = grid[0].length;
  let top = Infinity, left = Infinity, bottom = -Infinity, right = -Infinity;
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        top = Math.min(i, top)
        bottom = Math.max(i, bottom)
        left = Math.min(j, left)
        right = Math.max(j, right)
      }
    }
  }
  return (bottom - top + 1) * (right - left + 1)
};