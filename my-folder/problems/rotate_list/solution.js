let rotateRight = function(head, k){
    if(!head || k == 0) return head;   
    let ptr = head, len = 1; // len stores total nodes
    while(ptr.next ) {
        ptr = ptr.next;
        len++;
    } // after loop ptr will point to last node
    ptr.next = head;
    k %= len;
    for(let i = 0; i < len - k; i++) {
        ptr = ptr.next; 
    } // after loop ptr will point to new tail
    head = ptr.next;
    ptr.next = null;
    return head; 
}