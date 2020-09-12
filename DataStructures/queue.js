class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.tail = null;
    }
    let oldHead = this.head;
    let newHead = this.head.next;
    this.head.next = null;
    this.head = newHead;
    this.length--;
    return oldHead;
  }
}

// let queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.dequeue());

// console.log(queue);

module.exports = Queue;
