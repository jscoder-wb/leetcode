var sortedArrayToBST = function(nums) {
  let constructTree = function (arr) {
    if(arr.length == 0) return null
    let middle = Math.floor(arr.length / 2)
    let root = {val: arr[middle]}
    root.left = constructTree(arr.slice(0, middle))
    root.right = constructTree(arr.slice(middle + 1))
    return root
  }
  return constructTree(nums)
};