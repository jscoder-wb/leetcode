// backtracking solution
var generateParenthesis = function(n) {
  const output = []; 
  const dfs = (str, open, close) => { 
    if (open > close) return 
    if (open === 0 && close === 0) {
      output.push(str);
      return;
    }
    if (open > 0) {
      dfs(`${str}(`, open - 1, close);
    }
    if (close > 0) {
      dfs(`${str})`, open, close - 1);
    }
  };
  dfs('', n, n);
  return output;
};