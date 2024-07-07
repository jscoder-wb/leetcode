class MyCircularQueue {
  constructor(k) {
    this.queue = new Array(k);
    this.maxSize = k;
    this.front = 0;
    this.rear = -1;
  }
  enQueue(val) {
    if (this.isFull()) return false;
    this.rear = (this.rear + 1) % this.maxSize;
    this.queue[this.rear] = val;
    return true;
  }
  deQueue() {
    if (this.isEmpty()) return false;
    if (this.front === this.rear) {
      this.front = 0;
      this.rear = -1;
    } else this.front = (this.front + 1) % this.maxSize;
    return true;
  }
  Front() {
    return this.isEmpty() ? -1 : this.queue[this.front];
  }
  Rear() {
    return this.isEmpty() ? -1 : this.queue[this.rear];
  }
  isEmpty() {
    return this.rear === -1;
  }
  isFull() {
    return !this.isEmpty() && (this.rear + 1) % this.maxSize === this.front;
  }
}