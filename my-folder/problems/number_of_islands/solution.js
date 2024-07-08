const numIslands = (grid) => {
  function explore(row, col) {
    if (
      row < 0 || col < 0 || row >= grid.length ||
      col >= grid[row].length || grid[row][col] === "0"
    ) return
    grid[row][col] = "0"
    explore(row, col + 1)
    explore(row, col - 1)
    explore(row + 1, col)
    explore(row - 1, col)
  }
  let count = 0
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] == "1") {
        count++
        explore(row, col)
      }
    }
  }
  return count
}