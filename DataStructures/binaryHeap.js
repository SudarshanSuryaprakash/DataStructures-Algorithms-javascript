const swap = require('../swap');

class BinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp(val);
  }

  bubbleUp(element) {
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    swap(this.values, 0, this.values.length - 1);
    let max = this.values.pop();
    let idx = 0;
    let childIdx;
    if (this.values[2 * idx + 1]) {
      childIdx =
        this.values[2 * idx + 1] > this.values[2 * idx + 2]
          ? 2 * idx + 1
          : 2 * idx + 2;
    }
    while (this.values[childIdx] > this.values[idx]) {
      swap(this.values, childIdx, idx);
      idx = childIdx;
      if (this.values[2 * idx + 1]) {
        childIdx =
          this.values[2 * idx + 1] > this.values[2 * idx + 2]
            ? 2 * idx + 1
            : 2 * idx + 2;
      }
    }
    console.log(this.values);
    return max;
  }
}

let bh = new BinaryHeap();
bh.insert(41);
bh.insert(39);
bh.insert(33);
bh.insert(18);
bh.insert(27);
bh.insert(12);
bh.insert(55);
console.log(bh.extractMax());
console.log(bh.extractMax());
