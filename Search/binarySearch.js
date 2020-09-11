function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (left <= right) {
    if (arr[middle] === val) {
      return middle;
    }
    if (val > arr[middle]) {
      left = middle + 1;
    }
    if (val < arr[middle]) {
      right = middle - 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  //   if (arr[middle] === val) {
  //     return middle;
  //   }
  return -1;
}

// const res = binarySearch([1, 2, 3, 4, 5], 5);

// // Original Solution
// function binarySearch(arr, elem) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);
//     while(arr[middle] !== elem && start <= end) {
//         if(elem < arr[middle]){
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//         middle = Math.floor((start + end) / 2);
//     }
//     if(arr[middle] === elem){
//         return middle;
//     }
//     return -1;
// }

// // Refactored Version
// function binarySearch(arr, elem) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);
//     while(arr[middle] !== elem && start <= end) {
//         if(elem < arr[middle]) end = middle - 1;
//         else start = middle + 1;
//         middle = Math.floor((start + end) / 2);
//     }
//     return arr[middle] === elem ? middle : -1;
// }

const res = binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 30);

console.log(res);
