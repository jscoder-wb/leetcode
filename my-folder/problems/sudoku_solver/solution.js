// backtracking solution
var solveSudoku = function (board) {
  solver(board);
};
const solver = (board) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") {
        let char = "1";
        while (+char <= 9) {
          if (isValidSudoku(i, j, board, char)) {
            board[i][j] = char;
            if (solver(board)) return true;
            else board[i][j] = ".";
          }
          char = (+char + 1).toString();
        }
        return false;
      }
    }
  }
  return true;
};
const isValidSudoku = (row, col, board, char) => {
  for (let i = 0; i < 9; i++) if (board[row][i] == char) return false;
  for (let i = 0; i < 9; i++) if (board[i][col] == char) return false;
  
  // (x, y) represents the position of the 1st cell of grid in which the char is to be inserted 
  const x = (Math.trunc(row / 3)) * 3; // Math.trunc removes everything after the decimal point
  const y = (Math.trunc(col / 3)) * 3;

  for (let i = 0; i < 3; i++) 
    for (let j = 0; j < 3; j++) 
      if (board[x + i][y + j] == char) return false;
  return true;
};