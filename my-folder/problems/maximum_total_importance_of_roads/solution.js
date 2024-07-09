// solution from codestory
var maximumImportance = function (n, roads) {
  let degree = new Array(n).fill(0); 

  for (let road of roads) {
    let u = road[0];
    let v = road[1]; 
    degree[u]++;
    degree[v]++;
  } 
  degree.sort((a, b) => a - b);
  let value = 1;
  let sum = 0; 

  for (let i = 0; i < n; i++) {
    sum += (degree[i] * value);
    value++;
  } 
  return sum;
}; 