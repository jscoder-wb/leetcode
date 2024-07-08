var removeDuplicates = function(s) {
  const stack = []
  for (let ch of s) {
    stack[stack.length - 1] == ch ? stack.pop() : stack.push(ch)
  }    
  return stack.join('')
};