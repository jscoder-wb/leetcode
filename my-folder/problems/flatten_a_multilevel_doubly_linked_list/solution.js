// stack solution
let flatten = function(head) {
  if (!head) return head;
  let stack = [], cur = head;
  while (cur){
    if (cur.child) {
      if (cur.next) stack.push(cur.next);
      cur.next = cur.child;
      cur.next.prev = cur; 
      cur.child = null 
    }
    else if (!cur.next && stack.length!= 0){  
      cur.next = stack.pop();
      cur.next.prev = cur; 
    }
    cur = cur.next;
  }
  return head; 
};