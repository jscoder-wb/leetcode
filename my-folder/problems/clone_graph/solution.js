// bfs solution
var cloneGraph = function (node) {  
  if (!node) return null 
  const map = {}, q = [node]
  map[node.val] = {val: node.val, neighbors: []}
  while (q.length > 0) { 
    const curr = q.shift() 
    for (const neighbor of curr.neighbors) { 
      if (!map[neighbor.val]) { 
        map[neighbor.val] = {val: neighbor.val, neighbors: []}
        q.push(neighbor)
      } 
      map[curr.val].neighbors.push(map[neighbor.val])
    }
  }
  return map[node.val]
}