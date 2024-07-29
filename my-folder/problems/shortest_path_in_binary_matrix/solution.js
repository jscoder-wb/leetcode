// bjs solution
var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length
  if (grid[0][0] || grid[n - 1][n - 1]) return -1
  const queue = []
  const dist = 0
  queue.push([0, 0, dist + 1])
  const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
  for (const [i, j, d] of queue) {
    if (i === n - 1 && j === n - 1) return d
    for (const [x, y] of directions) {
      const newI = i + x
      const newJ = j + y
      if (0 <= newI && newI < n && 0 <= newJ && newJ < n && !grid[newI][newJ]) {
        queue.push([newI, newJ, d + 1])
        grid[newI][newJ] = 1
      }
    }
  }
  return -1
};