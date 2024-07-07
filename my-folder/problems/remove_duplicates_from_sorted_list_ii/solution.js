const deleteDuplicates = function(head) {
  if(!head || !head.next) return head;
  
  const dummy = new ListNode(0);
  dummy.next = head;
  head = dummy;
  
  while(head.next && head.next.next) {
    if(head.next.val === head.next.next.val) {
      let val = head.next.val;
      while( head.next && head.next.val === val ) 
        head.next = head.next.next;
    } else head = head.next;
  }
  return dummy.next
}