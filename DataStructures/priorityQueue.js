const swap = require('../swap');
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      swap(this.values, idx, parentIdx);
      idx = parentIdx;
    }
    return this.values;
  }

  dequeue() {
    swap(this.values, 0, this.length - 1);
    let result = this.values.pop;
    this.sinkDown();
    return result;
  }

  // sinkDown(){
  //     let idx = 0;
  //     const element = this.values[0];
  //     while(true){
  //         let leftChildIdx = idx * 2 + 1
  //         let rightChildIdx = idx * 2 + 2
  //         let leftChild, rightChild;

  //     }
  // }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
