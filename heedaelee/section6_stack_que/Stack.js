//출 : https://velog.io/@kimhyo_0218/JavaScript-%EC%8A%A4%ED%83%9DStack-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }

  push(item) {
    this.arr[this.index++] = item;
    return item;
  }

  pop() {
    if (this.index <= 0) return null;
    const value = this.arr[--this.index];
    return value;
  }
}

let stack = new Stack;

stack.push(1); // arr: [1], index: 1
stack.push(2); // arr: [1, 2], index: 2
stack.push(3); // arr: [1, 2, 3], index: 3
console.log(stack.pop()); // 3 , index: 2
console.log(stack.pop()); // 2 , index: 1
console.log(stack.pop()); // 1 , index: 0
console.log(stack.pop()); // null
