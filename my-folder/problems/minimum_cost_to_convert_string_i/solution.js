// solution from codestorywithmik
var minimumCost = function (source, target, original, changed, cost) {
  const adjMatrix = Array.from({
    length: 26
  }, () => Array(26).fill(Infinity));

  function FloydWarshall() {
    for (let i = 0; i < original.length; i++) {
      const s = original[i].charCodeAt(0) - 97;
      const t = changed[i].charCodeAt(0) - 97;
      adjMatrix[s][t] = Math.min(adjMatrix[s][t], cost[i]);
    }
    for (let k = 0; k < 26; ++k) {
      for (let i = 0; i < 26; ++i) {
        for (let j = 0; j < 26; ++j) {
          adjMatrix[i][j] = Math.min(adjMatrix[i][j], adjMatrix[i][k] + adjMatrix[k][j]);
        }
      }
    }
  }
  FloydWarshall();
  let ans = 0;
  for (let i = 0; i < source.length; i++) {
    if (source[i] === target[i]) continue;
    if (adjMatrix[source[i].charCodeAt(0) - 97][target[i].charCodeAt(0) - 97] === Infinity) {
      return -1;
    }
    ans += adjMatrix[source[i].charCodeAt(0) - 97][target[i].charCodeAt(0) - 97];
  }
  return ans;
};