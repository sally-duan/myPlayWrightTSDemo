//object has keys sorted and map does not have keys sorted and it keeps its original orders

let data = [8, 2, 3, 4, 5, 6, 3, 4, 7];
function occurrenceTester(data) {
  let occurrence = {};
  for (let item of data) {
    if (occurrence[item]) {
      occurrence[item]++;
    } else occurrence[item] = 1;
  }

  return occurrence;
}

console.log(occurrenceTester(data));
function occurrenceTester2(data) {
  let occurrence = new Map();
  for (let item of data) {
    occurrence.set(item, (occurrence[item] || 0) + 1);
  }
  return occurrence;
}

console.log(occurrenceTester2(data));

let data2 = [8, 2, 3, 4, 5, 0, 6, 3, 4, 7, -2];

function findTop3(data) {
  if (data.length <= 2) return "not able to find the top 3";

  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  for (let item of data2) {
    if (item > first) {
    [first, second, third] = [item, second, third]
    } else if (item > secon) {
      [second, third] = [item, second];
    } else if (item > third) {
      third = item;
    }
  }
  let result = [first, second, third];
  return result;
}
console.log(findTop3(data2));
