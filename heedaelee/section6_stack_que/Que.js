// 큐 : https://www.zerocho.com/category/Algorithm/post/580b9b94108f510015524097
let Queue = (function () {
  function Queue() {
    this.count = 0;
    this.head = null;
    this.rear = null;
  }

  Queue.prototype.log = function () {
    console.log({ count: this.count, head: this.head, rear: this.rear });
  };

  function Node(data) {
    this.data = data;
    this.next = null;
  }
  Queue.prototype.enqueue = function (data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.rear.next = node;
    }
    this.rear = node;
    return ++this.count;
  };
  Queue.prototype.dequeue = function () {
    if (!this.head) {
      //statck underflow 방지
      return false;
    }
    let data = this.head.data;
    this.head = this.head.next;
    //this.head 메모리 클린
    --this.count;
    return data;
  };
  Queue.prototype.front = function () {
    return this.head && this.head.data;
  };
  return Queue;
})();

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(5);
// queue.log();
console.log("delete Data: ", queue.dequeue());
console.log(queue.front());
