// const merge = (arr1, arr2) => {
//   let arr = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       arr.push(arr1[i]);
//       i++;
//     } else {
//       arr.push(arr2[j]);
//       j++;
//     }
//   }
//   if (i !== arr1.length) {
//     for (k = i; k < arr1.length; k++) {
//       arr.push(arr1[k]);
//     }
//   }
//   if (j !== arr2.length) {
//     for (k = j; k < arr2.length; k++) {
//       arr.push(arr2[k]);
//     }
//   }
//   //   while (i < arr1.length) {
//   //     arr.push(arr1[i]);
//   //     i++;
//   //   }
//   //   while (j < arr2.length) {
//   //     arr.push(arr2[j]);
//   //     j++;
//   //   }
//   return arr;
// };

// Merges two already sorted arrays
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

//Merge sort

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

const res = mergeSort([1, 2, 18, 12, 4, 3, 18, 34, 17]);

//const res = merge([1, 10, 50], [2, 14, 99, 100]);
console.log(res);
