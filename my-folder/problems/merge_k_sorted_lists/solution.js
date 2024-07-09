var mergeKLists = function(lists) {    
  const minHeap = []
  for (let head of lists) if (head) minHeap.push(head);
  minHeap.sort((a, b) => a.val - b.val)
  const tempHead = new ListNode();
  let curr = tempHead;
  while (minHeap.length) {
    const {val, next} = minHeap.shift()
    curr.next = new ListNode(val);
    curr = curr.next;
    if (next) {
     minHeap.push(next); 
     minHeap.sort((a, b) => a.val - b.val)
    }
  }
  return tempHead.next;
};