var swapPairs = function(head) {
  if (head == null || head.next == null) {
    return head;
  }
  let ans = {}
  ans.next = head;
  let curr = ans;
  while (curr.next != null && curr.next.next != null) {
    let t1 = curr.next;
    let t2 = curr.next.next;
    curr.next = t2;
    t1.next = t2.next;
    t2.next = t1;
    curr = curr.next.next;
  }
  return ans.next;
};