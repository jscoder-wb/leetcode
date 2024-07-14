let modifiedList = function (nums, head) {
    let res = new ListNode();
    let resCur = res;
    let cur = head, set = new Set(nums);
    while (cur) {
        if (!set.has(cur.val)) {
            resCur.next = new ListNode(cur.val);
            resCur = resCur.next;
        }
        cur = cur.next;
    }
    return res.next;
};
// let head = {val: 1}
// head.next = {val: 2}
// head.next.next = {val: 3}
// head.next.next.next = {val: 4}
// head.next.next.next.next = {val: 5}
// modifiedList([1,2,3], head)