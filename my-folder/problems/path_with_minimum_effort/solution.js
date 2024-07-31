var minimumEffortPath = function (H) {
  const vis = Array.from({ length: H.length }, () => {
    return new Array(H[0].length).fill(false);
  });
  const ans = Array.from(Array(H.length), () => Array(H[0].length).fill(Infinity));
  ans[0][0] = 0;

  const Q = new MinPriorityQueue({
    priority: x => x[0]
  });
  Q.enqueue([0, 0, 0]);
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  while (Q.size() > 0) {
    const [effort, x, y] = Q.dequeue().element;
    if (x === H.length - 1 && y === H[0].length - 1) return effort;

    if (vis[x][y]) continue;
    vis[x][y] = true;

    for (const [dx, dy] of directions) {
      const nx = x + dx, ny = y + dy;
      if (nx >= 0 && nx < H.length && ny >= 0 && ny < H[0].length) {
        const newEffort = Math.max(effort, Math.abs(H[x][y] - H[nx][ny]));
        if (newEffort < ans[nx][ny]) {
          ans[nx][ny] = newEffort;
          Q.enqueue([newEffort, nx, ny]);
        }
      }
    }
  }
};