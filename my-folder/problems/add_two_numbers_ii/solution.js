let addTwoNumbers = function (l1, l2) {
  l1 = reverseList(l1);
  l2 = reverseList(l2);
  let List = new ListNode(0);
  let head = List;
  let sum = 0, carry = 0;
  
  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }
    head.next = new ListNode(sum);
    head = head.next;
    sum = carry;
    carry = 0;
  }
  return reverseList(List.next);
};
let reverseList = function (head) {
  let prev = null, curr = head, next = null;
  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};