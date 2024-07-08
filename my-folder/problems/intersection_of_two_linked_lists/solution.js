var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null
    let A = headA, B = headB
    while(A != B) {
        A = (A) ? A.next : headB
        B = (B) ? B.next : headA
    }
    return A
};