var minHeightShelves = function (books, shelfWidth) {
  const memo = new Array(books.length).fill(0).map(() => new Array(shelfWidth + 1).fill(0));

  const rec = (i, remW, currH) => {
    if (i === books.length) return currH;
    if (memo[i][remW] !== 0) return memo[i][remW];
    const [currBW, currBH] = books[i];

    const newShelfHeight = currH + rec(i + 1, shelfWidth - currBW, currBH);

    let currentShelfHeight = Infinity;
    if (remW >= currBW) {
      const newHeight = Math.max(currH, currBH);
      currentShelfHeight = rec(i + 1, remW - currBW, newHeight);
    }

    const result = Math.min(newShelfHeight, currentShelfHeight);
    return memo[i][remW] = result;
  }
  return rec(1, shelfWidth - books[0][0], books[0][1]);
};