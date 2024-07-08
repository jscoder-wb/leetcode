var minSwaps = function(s) {
  const stack = []

  for (let ch of s) {
    if (ch === "[") stack.push("[")
    else if (stack.length !== 0 && ch === "]") stack.pop()
  } 

  return Math.ceil(stack.length / 2)  
};