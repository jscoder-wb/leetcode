const queryResults = function (limit, queries) {
  const distinctColors = new Set();
  const ballColors = new Map();
  const colorCounts = new Map();

  return queries.map(([x, y]) => {
    if (ballColors.has(x)) {
      const oldColor = ballColors.get(x);
      const oldColorCount = colorCounts.get(oldColor) - 1;

      colorCounts.set(oldColor, oldColorCount);
      if (oldColorCount === 0) distinctColors.delete(oldColor);
    }

    ballColors.set(x, y);
    if (!colorCounts.has(y)) colorCounts.set(y, 0); 
    
    colorCounts.set(y, colorCounts.get(y) + 1);
    distinctColors.add(y);

    return distinctColors.size;
  });
};