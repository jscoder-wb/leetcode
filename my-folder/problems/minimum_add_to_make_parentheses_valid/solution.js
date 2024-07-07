// stack solution
var minAddToMakeValid = function(str) {
  const stack = []
  for(let char of str){
    if (char === ')' && stack[stack.length-1] === '(') stack.pop()
    else stack.push(char)
  }
  return stack.length
};