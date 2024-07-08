class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }
  valueOf() {
    return [...this.nums].reduce((sum, num) => sum + num, 0);
  }
  toString() {
    return JSON.stringify(this.nums);
  }
}
// valueOf returns the primitive value of an object.
// toString returns the string representation of an object. 
// JS automatically calls above methods when encountering an object where a primitive value is expected.
// const obj1 = new ArrayWrapper([1,2]);
// const obj2 = new ArrayWrapper([3,4]);
// obj1 + obj2; // 10
// String(obj1)