//common functions: set(key, value), get(key), remove(key), has(key) keys(), values()

// let data = "the quick   brown fox jumps over the lazy dog";

// function wordFre(data) {
//   let freMap = new Map();
//   let words = data.split(/\s+/);

//   words.forEach((word) => {
//     if (freMap.has(word)) {
//       freMap.set(word, freMap.get(word) + 1);
//       console.log(word);
//     } else {
//       freMap.set(word, 1);
//     }
//   });
//   return freMap;
// }
// console.log(wordFre(data));

// const firstNames = ["John", "Alice", "Liam", "Emma", "Noah", "Olivia"];
// const lastNames = ["Smith", "Johnson", "Lee", "Brown", "Taylor", "Davis"];
// const phones = [
//   "(213) 584-0921",
//   "(801) 237-4485",
//   "(412) 765-1043",
//   "(310) 908-3300",
//   "(412) 765-1111",
//   "(310) 908-2222",
// ];

// function phoneNumberDirectory(data) {
//   const firstNames = ["John", "Alice", "Liam", "Emma", "Noah", "Olivia"];
//   const lastNames = ["Smith", "Johnson", "Lee", "Brown", "Taylor", "Davis"];
//   let phoneDirectory = new Map();

//   let myRandomFirstname = Math.random() * firstNames.length;
//   let myRandomLastName = Math.random() * lastNames.length;
//   let name =
//     firstNames[Math.floor(myRandomFirstname)] +
//     lastNames[Math.floor(myRandomLastName)];

//   for (let str of data) {
//     let myRandomFirstname = Math.random() * firstNames.length;
//     let myRandomLastName = Math.random() * lastNames.length;
//     let name =
//       firstNames[Math.floor(myRandomFirstname)] +
//       " " +
//       lastNames[Math.floor(myRandomLastName)];
//     phoneDirectory.set(str, name);
//   }

//   return phoneDirectory;
// }

// console.log(phoneNumberDirectory(phones));

function anagramGrouping(data) {
  let group = new Map();
  for (let item of data) {
    let key = item.split("").sort().join("");
    if (group.has(key)) {
      group.get(key).push(item);
    } else group.set(key, [item]);
  }
  return group;
}

let gamewords = ["cat", "act", "tac", "god", "dog"];
console.log(anagramGrouping(gamewords).values());

const newSet = new Set(["john", "jay", "joe"]);
console.log(newSet);

function symmetricDifference(arr1, arr2) {
  let result = new Set();
  for (let item of arr1) {
    if (!arr2.includes(item)) {
      result.add(item);
    }
  }

  for (let item of arr2) {
    if (!arr1.includes(item)) {
      result.add(item);
    }
  }

  return Array.from(result);
}

console.log(symmetricDifference([3, 4, 5, 6], [4, 5, 6, 7]));

function twoSum(nums, target) {
  let result = new Set(nums);

  let indexes = [];
  for (let number of nums) {
    if (result.has(target - number)) {
      indexes.push([nums.indexOf(number), nums.indexOf(target - number)]);
    }
  }
  return indexes;
}

console.log(twoSum([3, 4, 5, 6, 7, 8, 9, 0], 9));

function longestConsecutive(data) {
  let numbers = new Set(data);

  let maxLength = 1;
  for (let number of numbers) {
    let copy = number;
    let currentLength = 1;
    while (numbers.has(number + 1)) {
      number++;
    }
    while (numbers.has(copy - 1)) {
      currentLength++;
      copy--;
    }

    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }
  return maxLength;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 9, 1]));

function longestConsecutive2(data) {
  let numbers = new Set(data);

  let maxLength = 1;
  for (let number of numbers) {
    let currentLength = 0;
    if (!numbers.has(number - 1)) {
      while (numbers.has(number)) {
        currentLength++;
        number++;
      }
    }

    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }
  return maxLength;
}

console.log(longestConsecutive2([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive2([0, 3, 7, 2, 5, 8, 4, 6, 9, 1]));
