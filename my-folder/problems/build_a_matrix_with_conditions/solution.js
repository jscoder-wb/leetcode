var buildMatrix = function (k, rowConditions, colConditions) {
  const row = getTopologicalSort(rowConditions, k);
  const column = getTopologicalSort(colConditions, k);

  const matrix = new Array(k).fill(null).map(() => new Array(k).fill(0));

  if (!row || !column) return [];
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < k; j++) {
      if (row[i] == column[j]) {
        matrix[i][j] = row[i];
        break;
      }
    }
  }
  return matrix;
};

function getTopologicalSort(arr, k) {
  const adjList = {};
  const stack = [];
  const visited = [];
  const pathVisited = [];

  for (let i = 1; i <= k; i++) {
    adjList[i] = new Set();
  }
  for (let [v1, v2] of arr) {
    adjList[v1].add(v2);
  }
  for (let v of Object.keys(adjList)) {
    if (!visited[v]) {
      const isCycle = helper(Number(v));
      if (isCycle) return;
    }
  }
  stack.reverse();
  return stack;

  function helper(v) {
    visited[v] = true;
    pathVisited[v] = true;

    for (let adv of adjList[v] || []) {
      if (!visited[adv]) {
        if (helper(adv)) return true;
      } else if (pathVisited[adv]) {
        return true;
      }
    }
    stack.push(v);
    pathVisited[v] = false;
    return false;
  }
}