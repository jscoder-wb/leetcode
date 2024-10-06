var remainingMethods = function (n, k, invocations) {
   // step 1 build graph
  const graph = Array.from({ length: n }, () => []);
  const reverseGraph = Array.from({ length: n }, () => []);

  for (const [a, b] of invocations) {
    graph[a].push(b);
    reverseGraph[b].push(a);
  }

  // Step 2: Find all methods that are reachable from k (suspicious methods)
  const suspiciousMethods = new Set();
  function dfs(node) {
    if (suspiciousMethods.has(node)) return;
    suspiciousMethods.add(node);
    for (const neighbor of graph[node]) {
      dfs(neighbor);
    }
  }
  dfs(k);

  // Step 3: Check if any method outside suspiciousMethods invokes a method inside it
  for (const method of suspiciousMethods) {
    for (const invoker of reverseGraph[method]) {
      if (!suspiciousMethods.has(invoker)) {
        // Found an external invocation, can't remove suspicious methods
        return Array.from({ length: n }, (_, i) => i);
      }
    }
  }

  // Step 4: Return remaining methods if suspicious methods can be removed
  const remainingMethods = [];
  for (let i = 0; i < n; i++) {
    if (!suspiciousMethods.has(i)) {
      remainingMethods.push(i);
    }
  }
  return remainingMethods;
};