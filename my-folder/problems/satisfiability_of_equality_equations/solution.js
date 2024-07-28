// union find solution from codestory
var equationsPossible = function (equations) {
  let parent = new Map();

  const find = ele => {
    parent.set(ele, parent.get(ele) || ele);
    return parent.get(ele) === ele ? ele : find(parent.get(ele));
  }
  equations.forEach(([var1, eq, , var2]) => {
    if (eq === "=") parent.set(find(var1), find(var2));
  })

  for (let [var1, eq, , var2] of equations) {
    if (eq === "!") {
      if (find(var1) === find(var2))
        return false;
    }
  }
  return true;
};