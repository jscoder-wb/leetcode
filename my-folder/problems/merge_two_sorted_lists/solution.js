var mergeTwoLists = function(first, second) {
    let d = new ListNode(-1); //dummy and temp
    let temp = d;

    while(first && second) {
        if(first.val < second.val) {
            temp.next = first
            first = first.next
        } else {
            temp.next = second
            second = second.next
        }
        temp = temp.next
    }
    temp.next = first ? first : second
    return d.next;
};