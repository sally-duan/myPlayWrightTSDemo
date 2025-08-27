// function removeDup(data) {
//   let index = 0;

//   let result = [data[0]];
//   for (let m = 1; m < data.length; m++) {
//     if (result[index] != data[m]) {
//       result.push(data[m]);
//       index++;
//     }
//   }
//   return result;
// }

// console.log(removeDup([1, 2, 3, 3, 4, 4, 5]));

function findDup(data) {
  if (data.length <= 1) return null;

  let allItems = new Map();
  for (const item of data) {
    if (!allItems.has(item)) {
      allItems.set(item, 1);
    } else allItems.set(item, allItems.get(item) + 1);
  }

  let duplicate = new Map();
  for (let [key, value] of allItems) {
    if (value >= 2) {
      duplicate.set(key, value);
    }
  }

  let myArray = [];
  for (let [key, value] of duplicate) {
    myArray.push([key, value]);
  }
  let result = myArray.reverse();
  return result;
}

let mm = findDup([1, 2, 2, 3, 4, 6, 8, 10, 10, 11]);

console.log(mm);
