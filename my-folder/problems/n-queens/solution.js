// backtracking solution
var solveNQueens = function (n) {
  const board = Array(n).fill().map(() => Array(n).fill("."));
  const recursive = (board, row) => {
    if (row === n) {
      let strArray = [];
      for (let i = 0; i < n; i++) {
        let tempStr = "";
        for (let j = 0; j < n; j++) tempStr += board[i][j];
        strArray.push(tempStr);
      }
      return [strArray];
    }
    let result = [];
    for (let i = 0; i < n; i++) { // i represents row
      if (isSafe(row, i)) {
        board[row][i] = "Q";
        let temp = recursive(board, row + 1);
        result.push(...temp);
        board[row][i] = ".";
      }
    }
    return result;
  };
  const isSafe = (row, col) => {
    //checking vertically
    for (let i = 0; i < n; i++) if (board[i][col] === "Q") return false;

    //checking horizontally
    for (let i = 0; i < n; i++) if (board[row][i] === "Q") return false;

    let steps;
    //top left diagonal
    steps = Math.min(row, col);
    for (let i = 1; i <= steps; i++) if (board[row - i][col - i] === "Q") return false;

    //bottom left diagonal
    steps = Math.min(n - row - 1, col);
    for (let i = 1; i <= steps; i++) if (board[row + i][col - i] === "Q") return false;

    //bottom right diagonal
    steps = Math.min(n - row - 1, n - col - 1);
    for (let i = 1; i <= steps; i++) if (board[row + i][col + i] === "Q") return false;

    //top right diagonal
    steps = Math.min(row, n - col - 1);
    for (let i = 1; i <= steps; i++) if (board[row - i][col + i] === "Q") return false;

    return true;
  };
  return recursive(board, 0);
}