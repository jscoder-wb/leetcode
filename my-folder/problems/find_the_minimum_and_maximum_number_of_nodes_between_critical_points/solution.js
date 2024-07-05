var nodesBetweenCriticalPoints = function (head) {
  const array = [0, 0];
  if (!head || !head.next || !head.next.next) {
    return [-1, -1];
  }
  let first = head;
  let second = head.next;
  let third = head.next.next;
  let index = 2, greater = -1, min = Number.MAX_SAFE_INTEGER, minDistance = Number.MAX_SAFE_INTEGER;
  while (third) {
    if ((second.val > first.val && second.val > third.val) || (second.val < first.val && second.val < third.val)) {
      if (greater !== -1) {
        const diff = index - greater;
        if (minDistance > diff) {
          minDistance = diff;
        }
      }
      greater = index;
      if (min > greater) {
        min = greater;
      }
    }
    index++;
    first = first.next;
    second = second.next;
    third = third.next;
  }
  array[0] = minDistance === Number.MAX_SAFE_INTEGER ? -1 : minDistance;
  array[1] = (min === Number.MAX_SAFE_INTEGER || min === greater) ? array[0] : greater - min;
  return array;
};