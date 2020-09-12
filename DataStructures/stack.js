class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
  }
}

class Stacl {
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) return undefined;
    let poppedNode = this.tail;
    this.tail = poppedNode.prev;
    poppedNode.prev = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
    }
    return poppedNode;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
