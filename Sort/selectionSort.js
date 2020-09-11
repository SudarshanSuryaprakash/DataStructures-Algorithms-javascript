const selectionSort = (arr) => {
  for (i = 0; i < arr.length; i++) {
    let temp;
    let min = arr[i];
    for (j = i + 1; j < arr.length; j++) {
      console.log(arr, arr[i], arr[j]);
      if (arr[j] < arr[i]) {
        if (arr[j] < min) {
          min = arr[j];
          temp = j;
        }
      }
    }
    if (min !== arr[i]) {
      [arr[i], arr[temp]] = [min, arr[i]];
    }
  }
  return arr;
};

const res = selectionSort([23, 12, 4, 6]);
console.log(res);

// // LEGACY VERSION (non ES2015 syntax)
// function sselectionSort(arr){
//     for(var i = 0; i < arr.length; i++){
//         var lowest = i;
//         for(var j = i+1; j < arr.length; j++){
//             if(arr[j] < arr[lowest]){
//                 lowest = j;
//             }
//         }
//         if(i !== lowest){
//             //SWAP!
//             var temp = arr[i];
//             arr[i] = arr[lowest];
//             arr[lowest] = temp;
//         }
//     }
//     return arr;
// }

// // ES2015 VERSION
// function selectionSort(arr) {
//   const swap = (arr, idx1, idx2) =>
//     ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[lowest] > arr[j]) {
//         lowest = j;
//       }
//     }
//     if (i !== lowest) swap(arr, i, lowest);
//   }

//   return arr;
// }

// selectionSort([0,2,34,22,10,19,17]);
