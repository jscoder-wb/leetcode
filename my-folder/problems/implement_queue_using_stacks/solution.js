class MyQueue {
  constructor() {
    this.firstStack = []
    this.secondStack = []
  }
  push(x) {
    this.firstStack.push(x)
  }
  pop() {
    this._prepare()
    return this.secondStack.pop()
  }
  peek() {
    this._prepare()
    return this.secondStack[this.secondStack.length - 1]
  }
  empty() {
    return this.firstStack.length === 0 && this.secondStack.length === 0
  }
  _prepare(){
    if(this.secondStack.length === 0) 
      while(this.firstStack.length) this.secondStack.push(this.firstStack.pop())
  }
}