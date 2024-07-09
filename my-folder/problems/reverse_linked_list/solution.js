var reverseList = function(head) {
    let newList = null
    let next = null
    let curr = head

    while(curr) {
        next = curr.next
        curr.next = newList
        newList = curr
        curr = next
    }
    return newList;
};