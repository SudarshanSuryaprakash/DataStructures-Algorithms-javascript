class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WIERD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WIERD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let arrIndex = this._hash(key);
    if (!this.keyMap[arrIndex]) {
      this.keyMap[arrIndex] = [];
    }
    this.keyMap[arrIndex].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    let res;
    if (!this.keyMap[index]) return undefined;
    this.keyMap[index].forEach((array) => {
      if (array[0] === key) res = array[1];
    });
    return res;
  }

  keys() {
    let arr = [];
    this.keyMap.forEach((array) => {
      array.forEach((subArray) => {
        arr.push(subArray[0]);
      });
    });
    return arr;
  }

  values() {
    let arr = [];
    this.keyMap.forEach((array) => {
      array.forEach((subArray) => {
        arr.push(subArray[1]);
      });
    });
    return arr;
  }
}

let ht = new HashTable();

ht.set('blue', 40);
ht.set('green', 41);
ht.set('yellow', 42);
ht.set('red', 43);
ht.set('purple', 46);

console.log(ht.values());
