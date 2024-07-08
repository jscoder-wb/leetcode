var maxSumBST = function (root) {
  if (!root) return 0
  let maxSum = 0
  const helper = (node) => {
    if (!node) 
      return {
        isValid: true,
        minVal: null,
        maxVal: null,
        sum: 0,
      }
    if (!node.left && !node.right) {
      maxSum = Math.max(maxSum, node.val)
      return {
        isValid: true,
        minVal: node.val,
        maxVal: node.val,
        sum: node.val,
      }
    }
    const leftObj = helper(node.left)
    const rightObj = helper(node.right) 
    
    const condition1 =
      leftObj.isValid && 
      (leftObj.maxVal === null || leftObj.maxVal < node.val)
 
    const condition2 =
      rightObj.isValid &&
      (rightObj.minVal === null || rightObj.minVal > node.val)

    if (condition1 && condition2) {
      let sum = node.val

      sum += leftObj.sum 
      sum += rightObj.sum
      maxSum = Math.max(maxSum, sum)

      return {
        isValid: true,
        minVal: leftObj.minVal !== null ? leftObj.minVal : node.val,
        maxVal: rightObj.maxVal !== null ? rightObj.maxVal : node.val,
        sum: sum,
      }
    }
    return { isValid: false }
  }

  helper(root)
  return maxSum
}