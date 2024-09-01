/**
 * @param {number[][]} queries
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function(queries, k) {
   const minHeap = new MaxPriorityQueue();
    const results = [];

    function manhattanDistance(x, y) {
        return Math.abs(x) + Math.abs(y);
    }

    for (const [x, y] of queries) {
        const distance = manhattanDistance(x, y);
        minHeap.enqueue(distance); // 7 5 3

        if (minHeap.size() > k) {
            minHeap.dequeue();
        }

        if (minHeap.size() < k) {
            results.push(-1);
        } else {
            results.push(minHeap.front().element);
        }
    }

    return results; 
};