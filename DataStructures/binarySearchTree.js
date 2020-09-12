const Queue = require('./queue');

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      let flag = true;
      while (flag === true) {
        if (val === current.val) return undefined;
        if (newNode.val > current.val) {
          if (current.right) {
            current = current.right;
          } else {
            current.right = newNode;
            flag = false;
          }
        } else {
          if (current.left) {
            current = current.left;
          } else {
            current.left = newNode;
            flag = false;
          }
        }
      }
    }
    return this;
  }

  find(val) {
    if (!this.root) return false;
    let current = this.root;
    let flag = true;
    let result = false;
    while (flag) {
      if (val === current.val) {
        result = true;
        flag = false;
      }
      if (val > current.val && current.right) {
        current = current.right;
      } else if (val < current.val && current.left) {
        current = current.left;
      } else {
        flag = false;
      }
    }
    return result;
  }

  bfs() {
    let visited = [];
    let queue = new Queue();
    queue.enqueue(this.root);
    while (queue.length) {
      let node = queue.dequeue();
      let { left, right, val } = node.val;
      //node.val is the node stored in the queue imported - goes to the val in the queue... just use an array next time
      if (left) queue.enqueue(left);
      if (right) queue.enqueue(right);
      visited.push(val);
    }
    return visited;
  }

  preOrder() {
    let visited = [];
    let current = this.root;
    function helper(node) {
      visited.push(node.val);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    }
    helper(current);
    return visited;
  }

  postOrder() {
    let visited = [];
    let current = this.root;
    function helper(node) {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      visited.push(node.val);
    }
    helper(current);
    return visited;
  }

  inOrder() {
    let visited = [];
    let current = this.root;
    function helper(node) {
      if (node.left) helper(node.left);
      visited.push(node.val);
      if (node.right) helper(node.right);
    }
    helper(current);
    return visited;
  }
}

//         10
//      6       15
//    3   8         20

//          10
//      5       13
//    2             14
//      4               16

let bst = new BinarySearchTree();
// bst.insert(10);
// bst.insert(5);
// bst.insert(13);
// bst.insert(2);
// bst.insert(4);
// bst.insert(14);
// bst.insert(16);
bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(20);
console.log('preOrder ', bst.preOrder());
console.log('postOrder', bst.postOrder());
console.log('inOrder ', bst.inOrder());
