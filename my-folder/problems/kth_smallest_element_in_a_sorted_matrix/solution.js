// if first k elements is inserted in max heap then top element of max heap is kth smallest element
var kthSmallest = function(matrix, k) {
  let maxheap = new MaxPriorityQueue()
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix.length; j++){
      maxheap.enqueue(matrix[i][j])
      if(maxheap.size() > k) maxheap.dequeue()
    }
  }
  return maxheap.front().element
};