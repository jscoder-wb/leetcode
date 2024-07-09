// Merge Sort 
const sortArray = nums => {
    if(nums.length <= 1) return nums
    
    const middle = Math.floor(nums.length / 2),
      left = nums.slice(0, middle),
      right = nums.slice(middle)
    
    return merge(sortArray(left), sortArray(right))
};
const merge = (left, right) => {
  // merges 2 sorted arrays
    const result = []

    while (left.length && right.length) {
        if(left[0] <= right[0]) result.push(left.shift())
        else result.push(right.shift())
    }
    return [...result, ...left, ...right]
}