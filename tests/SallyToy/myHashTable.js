class HashTable {
  constructor(limit = 14) {
    this.storage = [];
    this.limit = limit;
  }

  _hash(key, max) {
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }
    return index % max;
  }

  printTable() {
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i] == undefined) {
        console.log(`position ${i}  empty`);
      } else {
        for (let j = 0; j < this.storage[i].length; j++) {
          console.log(
            `position ${i}'s key value pair as ${JSON.stringify(
              this.storage[i][j]
            )}`
          );
        }
      }
    }
  }

  set(key, value) {
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }
    let position = index % this.limit;

    if (this.storage[position] === undefined) {
      this.storage[position] = [[key, value]];
    } else {
      let replaced = false;
      for (let i = 0; i < this.storage[position].length; i++) {
        if (this.storage[position][i][0] === key) {
          this.storage[position][i][1] = value;
          replaced = true;
          break;
        }
      }
      if (replaced === false) {
        this.storage[position].push([key, value]);
      }
    }
  }

  get(key) {
    let index = this._hash(key, this.limit);
    if (this.storage[index] === undefined) {
      return;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) return this.storage[index][i][1];
      }
    }
  }
  has(key) {
    const index = this._hash(key, this.limit);
    const storage = this.storage[index];

    if (storage) {
      for (let pair of storage) {
        if (pair[0] === key) {
          return true;
        }
      }
    }

    return false;
  }
  remove(key) {
    let index = this._hash(key, this.limit);
    if (this.storage[index] === undefined) {
      return;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        // if (this.storage[index][i][0] === key) delete this.storage[index][i];
        if (this.storage[index][i][0] === key) {
          this.storage[index].splice(i, 1);
          return;
        }
      }
    }
  }
}

// let m = new HashTable();
// console.log(m._hash("John", m.limit));

// m.set("sally", 1);
// m.set("sarah", 1);
// m.set("cab", 1);
// m.set("abc", 1);

// m.set("james", "4567");
// m.set("paul", "mmd");
// m.printTable();

// console.log(m.get("abcdef"));
// m.remove("sally");
// m.printTable();

function wordInstanceCounter(str, target) {
  let words = str.toLowerCase().split(/\W+/);

  let myHash = new HashTable();
  let counter = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === target) {
      counter = counter + 1;
      console.log(counter);
      if (myHash.has(target)) {
        myHash.set(target, myHash.get(target) + 1);
      } else myHash.set(target, 1);
    }
  }
  return myHash.get(target) || 0;
}

let result = wordInstanceCounter(
  "The quick brown fox jumps over the lazy dog the",
  "the"
);
console.group(result);
// function wordInstanceCounter(str, target) {
//   let words = str.toLowerCase().split(/\W+/);
//   target = target.toLowerCase();
//   console.log(words);

//   let myHash = new HashTable();

//   for (let i = 0; i < words.length; i++) {
//     if (words[i] === target) {
//       if (myHash.has(target)) {
//         myHash.set(target, myHash.get(target) + 1);
//       } else {
//         myHash.set(target, 1);
//       }
//     }
//   }

//   return myHash.get(target) || 0; // Return 0 if target not found
// }

// // function wordInstanceCounter(str, target) {
// //   let words = str.toLowerCase().split(/\W+/);
// //   target = target.toLowerCase();

// //   let myHash = new HashTable();

// //   for (let i = 0; i < words.length; i++) {
// //     if (words[i] === target) {
// //       console.log(`Matched: ${words[i]}`);
// //       if (myHash.has(target)) {
// //         console.log(`Already has '${target}' with count ${myHash.get(target)}`);
// //         myHash.set(target, myHash.get(target) + 1);
// //       } else {
// //         console.log(`First time setting '${target}'`);
// //         myHash.set(target, 1);
// //       }
// //     }
// //   }

// //   return myHash.get(target) || 0;
// // }

// let result = wordInstanceCounter(
//   "The quick brown fox jumps over the lazy dog the",
//   "the"
// );
// console.log(result); // Should print 2

// let result2 = wordInstanceCounter("The brown fox jump the fence the", "the");
// console.log(result2); // Should print 2

// let table = new HashTable();
// table.set("the", 1);
// console.log(table.get("the")); // Should print 1
// console.log(table.has("the")); // Should print true
