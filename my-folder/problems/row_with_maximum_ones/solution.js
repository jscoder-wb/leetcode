var rowAndMaximumOnes = function(mat) {
  let result = [0, 0] // learn this
  for(let i = 0; i < mat.length; i++) {
    let count = 0
    for(let j = 0; j < mat[0].length; j++) if(mat[i][j] === 1) count++
    if(count > result[1]) result = [i, count]
  }
  return result    
};