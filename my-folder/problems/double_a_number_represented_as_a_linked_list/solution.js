var doubleIt = function(head) {
  if (head.val > 4) {
    head = new ListNode(0, head);
  }
  let curr = head;
  while (curr) {
    curr.val = (curr.val * 2) % 10;
    if (curr.next && curr.next.val > 4) {
      curr.val += 1;
    }
    curr = curr.next;
  }
  return head;
};