// detecting cycle using dfs
var canFinish = function(numCourses, prerequisites) {
  let graph = createGraph(prerequisites, numCourses);
  let visited = new Set()
    , visiting = new Set(); 

  for (let node in graph) {
    if (detectCycle(graph, node, visited, visiting) === true)
      return false;
  }
  return true;
};

const detectCycle = (graph,node,visited,visiting)=>{
  visited.add(node);
  visiting.add(node);

  for (let neighbor of graph[node] || []) {
    if (!visited.has(neighbor)) {
      if (detectCycle(graph, neighbor, visited, visiting)) {
        return true;
      }
    } else if (visiting.has(neighbor))
      return true;
  }
  visiting.delete(node);
  return false;
}
const createGraph = (edges,nodeCount)=>{
  let graph = {};
  for (const [e,v] of edges) {
    if (graph[v])
      graph[v].push(e)
    else
      graph[v] = [e]
  }
  return graph;
}