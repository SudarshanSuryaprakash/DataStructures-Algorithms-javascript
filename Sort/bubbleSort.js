const bubbleSort = (arr) => {
  for (i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

const res = bubbleSort([8, 1, 2, 3, 4]);
console.log(res);
