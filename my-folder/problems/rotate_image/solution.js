var rotate = function(matrix) {
  // transpose (interchange rows into cols)
  for(let i = 0; i < matrix.length; i++) 
    for(let j = i; j < matrix.length; j++) 
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]

  // reverse each row
  const reverse = function(arr) {
    let left = 0, right = arr.length - 1
    while(left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++; right--
    }
  }
  for(let i = 0; i < matrix.length; i++) reverse(matrix[i])
};