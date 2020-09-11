const getDigit = (num, index) => {
  //   let str = num.toString();
  //   let arr = [];
  //   for (char of str) {
  //     arr.unshift(parseInt(char));
  //   }
  //   if (!arr[index]) return 0;
  //   return arr[index];
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
  return num.toString().length;
};

const mostDigits = (arr) => {
  let max = 0;
  for (i = 0; i < arr.length; i++) {
    if (digitCount(arr[i]) > max) {
      max = digitCount(arr[i]);
    }
  }
  return max;
};

console.log(mostDigits([12345, 12, 345, 2, 123456]));
