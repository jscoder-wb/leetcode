var findKthLargest = function(nums, k) {

  let maxPriorityQueue = new MaxPriorityQueue();
  nums.forEach((num) => maxPriorityQueue.enqueue(num))
  while(k > 1){
    maxPriorityQueue.dequeue()
    k--
  }
  return maxPriorityQueue.front().element
};