class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let poppedItem = this.tail;
    this.tail = poppedItem.prev;
    poppedItem.prev = null;
    if (this.length === 1) {
      this.head = null;
    } else {
      this.tail.next = null;
    }
    this.length--;
    return poppedItem;
  }

  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) return this.pop();
    let shiftedNode = this.head;
    this.head = shiftedNode.next;
    this.head.prev = null;
    shiftedNode.next = null;
    this.length--;
    return shiftedNode;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) return this.push(val);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) return null;
    let mid = Math.floor(this.length / 2);
    if (index < mid) {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    } else {
      let current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
      return current;
    }
  }

  set(index, value) {
    if (index < 0 || index > this.length) return null;
    let node = this.get(index);
    node.val = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) {
      this.unshift(value);
      this.length++;
      return this;
    }
    if (index === this.length) {
      this.push(value);
      this.length++;
      return this;
    }
    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    let removedNode = this.get(index);
    if (index < 0 || index > this.length) return null;
    if (index === 0) {
      this.shift();
    } else if (index === this.length) {
      this.pop();
    } else {
      let prevNode = removedNode.prev;
      let nextNode = removedNode.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      removedNode.prev = null;
      removedNode.next = null;
      this.length--;
    }
    return removedNode;
  }

  reverse() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    for (let i = 0; i < this.length; i++) {
      let { prev, next } = current;
      current.next = prev;
      current.prev = next;
      current = next;
    }
    return this;
  }

  print() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new DoublyLinkedList();
list.push('A');
list.push('B');
list.push('C');
list.push('D');
list.push('E');
list.print();
console.log(list.reverse());
list.print();
