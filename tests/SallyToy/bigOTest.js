// console.time("bigO");
// let myArr = Array.from({ length: 1000 }, (_, index) => index + 1);
// console.timeEnd("bigO");

// console.time("bigOAccess1");

// let result = myArr[40];

// console.timeEnd("bigOAccess1");

function maxSubArray(data, k) {
  let max = data[0] + data[1] + data[2];

  console.log(max);

  for (let i = 0; i < data.length - k; i++) {
    let currentTotal = 0;
    let start = i + 1;

    for (let m = 0; m < k; m++) {
      currentTotal += data[start];
      start++;
    }

    if (currentTotal > max) {
      max = currentTotal;
    }
  }

  return max;
}
let myMax = maxSubArray([2, 5, 3, 1, 11, 7, 6, 4], 3);
console.log("double loop max is " + myMax);

function maxSubArray(data, k) {
  let max = data[0] + data[1] + data[2];
  for (let i = 1; i < data.length - k; i++) {
    let activeTotal = 0;
    for (let j = i; j < i + k; j++) {
      activeTotal = activeTotal + data[j];
    }
    if (activeTotal > max) {
      max = activeTotal;
    }
  }

  return max;
}
let myMax2 = maxSubArray([2, 5, 3, 1, 11, 7, 6, 4], 3);
console.log("double loop max is " + myMax2);

function linearWay2(data, k) {
  let max = 0;
  for (let i = 0; i < k; i++) {
    max += data[i];
  }
  console.log("current max is " + max);
  let activeCalculation = max;
  for (let j = k; j < data.length; j++) {
    activeCalculation = activeCalculation + data[j] - data[j - 3];
    console.log(activeCalculation);
    if (activeCalculation > max) max = activeCalculation;
  }
  return max;
}
let myMax22 = linearWay2([2, 5, 3, 1, 11, 7, 6, 4], 3);
console.log(myMax22);
