//same([1,2,3], [1,9,4]) --> true
//same([1,2,1], [4,4,1]) ==> false

//check whether the squares in 1st array present in 2nd araray

//NAIVE APPROACH O(N2)
// const squares = (arr1, arr2) => {

//   if (arr1.length != arr2.length) {
//     return false;
//   }
//   for (num1 of arr1) {
//     let correctIndex = arr2.indexOf(num1 ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// };

const numMap = (arr) => {
  let obj = {};
  for (let num of arr) {
    obj[num] = obj[num] + 1 || 1;
  }
  return obj;
};

//O(N)

const squares = (arr1, arr2) => {
  if (arr1.length != arr2.length) {
    return false;
  }
  let obj1 = numMap(arr1);
  let obj2 = numMap(arr2);
  for (key in obj1) {
    if (!(key ** 2) in obj2) {
      return false;
    }
    if (!(obj1[key] === obj2[key ** 2])) {
      return false;
    }
  }
  return true;
};

const result = squares([1, 1, 2, 3], [4, 9, 4, 1]);
console.log(result);
