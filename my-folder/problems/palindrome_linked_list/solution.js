let midPoint = function(head){
  let slow = head, fast = head
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}
let reverse = function(head) {
  let newList = null
  while(head) {
    let next = head.next
    head.next = newList
    newList = head
    head = next
  }
  return newList
}
let compare = function(list1, list2) {
  while(list1 && list2){
    if(list1.val !== list2.val) return false
    list1 = list1.next
    list2 = list2.next
  }
  return true
}
var isPalindrome = function(head) {
    let midNode = midPoint(head)
    let halfList = reverse(midNode)
    return compare(head, halfList)
};