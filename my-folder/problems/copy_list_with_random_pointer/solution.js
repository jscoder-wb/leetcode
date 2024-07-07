function copyRandomList(head) {
  const map = new Map();
  function copy(inputNode)   {
    if (!inputNode) return null;
    if (map.get(inputNode)) return map.get(inputNode);

    const outputNode = {val: inputNode.val}
    map.set(inputNode, outputNode); 
    outputNode.next = copy(inputNode.next);
    outputNode.random = copy(inputNode.random);
    return outputNode;
  }
  return copy(head);
}


/* for debugging
let sev = new Node(7)
let thirteen = new Node(13)
let elev = new Node(11)
let ten = new Node(10)
let one = new Node(1)
sev.next = thirteen 
sev.next.next = elev
sev.next.next.next = ten 
sev.next.next.next.next = one
thirteen.random = sev
elev.random = one
ten.random = elev
one.random = sev
*/