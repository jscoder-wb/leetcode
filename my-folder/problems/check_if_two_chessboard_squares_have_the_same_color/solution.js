var checkTwoChessboards = function (coordinate1, coordinate2) {
  function toNumericValue(coordinate) {
    const column = coordinate.charCodeAt(0) - 'a'.charCodeAt(0); // Convert 'a'-'h' to 0-7
    const row = parseInt(coordinate[1]) - 1; // Convert '1'-'8' to 0-7
    return column + row;
  }

  // Convert both coordinates to their numeric values
  const value1 = toNumericValue(coordinate1);
  const value2 = toNumericValue(coordinate2);

  // Check if both values are even or both are odd
  return (value1 % 2 === value2 % 2);
};