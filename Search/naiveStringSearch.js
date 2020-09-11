function naiveStringSearch(string, str) {
  let count = 0;
  for (i = 0; i < string.length; i++) {
    let temp = i;
    for (j = 0; j < str.length; j++) {
      if (str[j] !== string[temp]) {
        break;
      }
      temp++;
      if (j === str.length - 1) {
        count++;
      }
    }
  }
  return count;
}

const res = naiveStringSearch('helloel you are elementary', 'el');
console.log(res);

//ohlolomg   lol
//  lol
