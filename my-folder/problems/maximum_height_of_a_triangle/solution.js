// brute force
var maxHeightOfTriangle = function(red, blue) {
  return Math.max(helper(red, blue), helper(blue, red));
  
  function helper(type1, type2) {
    let h = 0;
    let row = 1;
    while (true) {
      if (row % 2 === 1) {
        if (type1 >= row) type1 -= row;
        else break
      } else {
        if (type2 >= row) type2 -= row;
        else break
      }
      h++;
      row++;
    }
    return h;
  }
};