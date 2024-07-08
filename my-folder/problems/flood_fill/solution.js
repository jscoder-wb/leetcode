var floodFill = function (image, sr, sc, fill_color) {
  let startingColor = image[sr][sc]
  var fill = function (sr, sc) {
    if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) return
    if (startingColor == image[sr][sc]) {
      image[sr][sc] = fill_color
      fill(sr - 1, sc);
      fill(sr + 1, sc);
      fill(sr, sc - 1);
      fill(sr, sc + 1);
    }
  };
  if (startingColor == fill_color) return image;
  fill(sr, sc);
  return image;
}