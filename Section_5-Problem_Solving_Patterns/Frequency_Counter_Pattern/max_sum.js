// //return the maximum consecutive sum in an array where num is the number of elements to sum

const maxSubarraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// function maxSubarraySum(arr, num) {
//   let maxSum = 0;
//   let tempSum = 0;
//   if (arr.length < num) return null;
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   console.log(maxSum);
//   tempSum = maxSum;
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// }

// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
