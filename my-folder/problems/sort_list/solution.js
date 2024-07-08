function sortList (head) {
    if(!head || !head.next) return head;
    
    let fast = head.next, slow = head; // both moved 1 step from null
    // dividing list into 2 parts
    while(fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let middle = slow.next;
    slow.next = null; 
    return merge(sortList(head), sortList(middle));
}
const merge = (first, second) => {
// merges 2 sorted lists
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
}