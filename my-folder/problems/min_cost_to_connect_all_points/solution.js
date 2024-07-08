// prims algo solution (from neetcode)
var minCostConnectPoints = function(points) {
  let minCost = 0;
  const minHeap = new MinBinaryHeap()
  const visited = new Set();
  visited.add(JSON.stringify(points[0]))

  for (let i = 1; i < points.length; i++) {
    minHeap.insert([getDistance(points[0], points[i]), points[0], points[i]])
  } // [dist, a, b] dist = shortest dist from point a to b

  while (visited.size < points.length) {
    const [cost, _, point] = minHeap.extractMin()
    if (!visited.has(JSON.stringify(point))) {
      visited.add(JSON.stringify(point));
      minCost += cost;

      for (let i = 0; i < points.length; i++) {
        const distance = getDistance(point, points[i]);
        if (!visited.has(JSON.stringify(points[i]))) {
          minHeap.insert([distance, point, points[i]])
        }
      }
    }
  }
  return minCost;
};
function getDistance(p1, p2) {
  return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
}
class MinBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element[0] >= parent[0])
        break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  extractMin() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild[0] < element[0]) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if ((swap === null && rightChild[0] < element[0]) || (swap !== null && rightChild[0] < leftChild[0])) {
          swap = rightChildIdx;
        }
      }
      if (swap === null)
        break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
// slight modification for readability