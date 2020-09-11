function sameFrequency(num1, num2) {
  let obj1 = numMapp(num1);
  let obj2 = numMapp(num2);
  if (num1.length !== num2.length) {
    return false;
  }
  for (let key in obj1) {
    if (!Object.keys(obj2).includes(key)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

let numMapp = (num) => {
  num = num.toString();
  let obj = {};
  for (let item of num) {
    obj[item] = obj[item] + 1 || 1;
  }

  return obj;
};

console.log(sameFrequency(112, 211));
