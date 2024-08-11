var finalPositionOfSnake = function (n, commands) {
  let row = 0;
  let col = 0;
  for (const command of commands) {
    switch (command) {
      case "UP":
        row--;
        break;
      case "DOWN":
        row++;
        break;
      case "LEFT":
        col--;
        break;
      case "RIGHT":
        col++;
        break;
    }
  }
  return (row * n) + col;
};