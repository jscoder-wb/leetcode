var middleNode = function(head) {
  let slow = head, fast = head
  while(fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }    
  return slow
};