var spiralOrder = function(matrix) {
  let rows = matrix.length, cols = matrix[0].length, result = []
  let [topRow, bottomRow, leftCol, rightCol, size] = [0, rows - 1, 0, cols - 1, rows * cols]
  while(result.length < size) {
    // topRow 
    for(let i = leftCol; i <= rightCol && result.length < size; i++) 
      result.push(matrix[topRow][i])
    topRow++

    // rightCol
    for(let i = topRow; i <= bottomRow && result.length < size; i++) 
      result.push(matrix[i][rightCol])
    rightCol--

    // bottomRow
    for(let i = rightCol; i >= leftCol && result.length < size; i--) 
      result.push(matrix[bottomRow][i])
    bottomRow--

    //leftcol
    for(let i = bottomRow; i >= topRow && result.length < size; i--) 
      result.push(matrix[i][leftCol])
    leftCol++
  }
  return result
};