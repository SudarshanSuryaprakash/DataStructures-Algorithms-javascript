const swap = require('../swap');

const bubbleSort = (arr) => {
  for (i = arr.length; i > 0; i--) {
    let flag = true;
    for (j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        flag = false;
      }
    }
    if (flag) break;
  }
  return arr;
};

function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let min = Infinity;
    let index;
    for (j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        index = j;
      }
    }
    swap(arr, i, index);
  }
  return arr;
}

function insertionSort(arr) {
  return arr;
}

let res = insertionSort([52, 46, 1, 5, 3, 22, 45, 11]);
console.log(res);
