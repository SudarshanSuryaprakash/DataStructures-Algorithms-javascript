const insertionSort = (arr) => {
  let currentVal;
  for (i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

//1 3 4 2
//i = 3
// currentVal = arr[i] = 2
//j = 2
//arr[j] = 4

const res = insertionSort([1, 23, 12, 4, 6, 2]);
console.log(res);
