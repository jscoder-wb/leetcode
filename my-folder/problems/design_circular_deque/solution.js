// doubly linked list implementation of circular deque
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = this.prev = null;
    }
}
class DLL {
    constructor() {
        this.head = this.tail = null;
    }
    insertAtHead(value) {
        const newNode = new ListNode(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }   
    }
    insertAtTail(value) {
        const newNode = new ListNode(value);
        if(!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    removeHead() {
        if(this.head === this.tail) this.head = this.tail = null; 
        else {
          const temp = this.head;
          this.head = this.head.next;
          this.head.prev = null;
          temp.next = null;    
      }
    }
    removeTail() {
        if(this.head === this.tail) this.head = this.tail = null;
        else {
            const temp = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null; 
            temp.prev = null;
        }
    }
    getHead() {
        return this.head ? this.head.val : -1;
    }
    getTail() {
        return this.tail ? this.tail.val : -1;
    }
}
class MyCircularDeque {
    constructor(k) {
        this.list = new DLL();
        this.size = 0;
        this.maxSize = k;
    }
    insertFront(value) {
        if(this.size === this.maxSize) return false;
        this.list.insertAtHead(value);
        ++this.size;
        return true;
    }
    insertLast(value) {
        if(this.size === this.maxSize) return false;
        this.list.insertAtTail(value);
        ++this.size;
        return true;
    }
    deleteFront() {
        if(this.size === 0) return false; 
        this.list.removeHead();
        --this.size;
        return true;
    }
    deleteLast() {
        if(this.size === 0) return false; 
        this.list.removeTail();
        --this.size;
        return true;
    }
    getFront() {
        return this.list.getHead();
    }
    getRear() {
        return this.list.getTail();
    }
    isEmpty() {
        return this.size === 0;
    }
    isFull() {
        return this.size === this.maxSize;
    }
}