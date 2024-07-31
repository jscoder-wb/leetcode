// bfs solution from codestory 
function shortestPathBinaryMatrix(grid) {
  const n = grid.length;
  if (grid[0][0] || grid[n - 1][n - 1]) return -1

  const directions = [[1, 1], [0, 1], [1, 0], [0, -1], [-1, 0], [-1, -1], [1, -1], [-1, 1]];

  const Q = [[0, 0, 1]]; // i, j, distance
  grid[0][0] = 1; // mark first cell as visited

  while (Q.length) {
    let N = Q.length;
    while (N--) {
      const [i, j, d] = Q.shift();

      if (i === n - 1 && j === n - 1) return d

      for (const [x, y] of directions) {
        const newI = i + x, newJ = j + y

        if (newI >= 0 && newI < n && newJ >= 0 && newJ < n
         && grid[newI][newJ] === 0) {
          Q.push([newI, newJ, d + 1]);
          grid[newI][newJ] = 1; // marking visited
        }
      }
    } 
  }
  return -1;
}