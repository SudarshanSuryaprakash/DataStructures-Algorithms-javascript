class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
    return this;
  }

  pop() {
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //removing from the first position
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    currentHead.next = null;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  //getting value at index
  get(index) {
    if (index >= this.length || index < 0) return null;
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  //setting value at index
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    } else return false;
  }

  //inserting new node at index
  insert(index, value) {
    if (index > this.length || index < 0) return false;
    if (index === this.length) !!this.push(value);
    if (index === 0) !!this.unshift(val);

    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) {
      this.shift();
    }
    if (index === this.length - 1) {
      this.pop();
    }

    let prev = this.get(index - 1);
    let toRemove = prev.next;
    prev.next = toRemove.next;
    this.length--;
    return toRemove;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
list.push('A');

list.push('B');

list.push('C');
list.print();

list.reverse();

list.print();

//MY CODE

// pop() {
//     let current = this.head;
//     if(!current) return undefined;
//     for (let i = 1; i <= this.length; i++) {
//       let newTail = current;
//       current = current.next;
//       if (i === this.length - 1) {
//         console.log('inside ', i);
//         this.tail = newTail;
//         this.tail.next = null;
//         this.length -= 1;
//         return current;
//       }
//     }
//   }
