let m = [4, 5, 8, 1, 100, -200, 1000];

function getTop3(data) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  for (let num of data) {
    if (num > first) {
      [first, second, third] = [num, first, second];
    } else if (num > second && num < first) {
      [first, second, third] = [first, num, second];
      console.log(result);
    } else if (num < second && num > third) {
      [first, second, third] = [first, second, num];
    }
  }
  return [first, second, third];
}
console.log(getTop3(m));
