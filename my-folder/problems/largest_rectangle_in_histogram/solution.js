// solution from love babar video
// finds index of nearest next smaller element for each element in array
function nextSmallerIndex(arr) {
  let stack = [-1], ans = [];
  
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) 
      stack.pop();
    
    ans[i] = stack[stack.length - 1];
    stack.push(i);
  }
  return ans;
}
// finds index of nearest previous smaller element for each element in array
function previousSmallerIndex(arr) {
  let stack = [-1], ans = []
  
  for (let i = 0; i < arr.length; i++) {
    while(stack.length && arr[stack[stack.length -1]] >= arr[i])
        stack.pop()
    
    ans[i] = stack[stack.length - 1]
    stack.push(i)
  }
  return ans
}
let largestRectangleArea = function(heights) {
  let next = nextSmallerIndex(heights),
    prev = previousSmallerIndex(heights),
    area = Number.MIN_VALUE;
  
  for (let i = 0; i < heights.length; i++){
    let l = heights[i]
    if(next[i] == -1) next[i] = heights.length
    let b = next[i] - prev[i] - 1
    let newArea = l*b
    area = Math.max(area, newArea)
  }
  return area
};