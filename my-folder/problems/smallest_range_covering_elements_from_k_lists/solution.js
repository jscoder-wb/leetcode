var smallestRange = function(nums) {
  let minHeap = new MinPriorityQueue(
    { priority: item => item[0] });
  let start = 0, end = Infinity, maxSoFar = -Infinity;
  for (let num of nums) {
      minHeap.enqueue([num[0], 0, num]);
      maxSoFar = Math.max(maxSoFar, num[0]);
  }
  while (minHeap.size() == nums.length) {
      let [num, i, list] = minHeap.dequeue().element;
      
      if (end - start > maxSoFar - num) {
          start = num;
          end = maxSoFar;
      }
      if (list.length > i + 1) {
          minHeap.enqueue([list[i + 1], i + 1, list]);
          maxSoFar = Math.max(maxSoFar, list[i + 1]);
      }
  }
  return [start, end];
};