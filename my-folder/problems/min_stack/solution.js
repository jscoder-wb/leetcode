class MinStack {
  constructor() {
    this.elements = []; // min elem is stored in last obj of arr
  }
  push(x) {
    this.elements.push({
      value: x,
      min: this.elements.length === 0 ? x : Math.min(x, this.getMin()),
    });
  }
  pop() {
    this.elements.pop();
  }
  top() {
    return this.elements[this.elements.length - 1].value;
  }
  getMin() {
    return this.elements[this.elements.length - 1].min;
  }
}