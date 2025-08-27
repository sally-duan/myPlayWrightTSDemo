//Anagram tester
//longest consecutive numbers
//longest non repeat substring
//item's duplications

function AnagramTester(str1, str2) {
  if (str1.length !== str2.length) return false;

  let collection = {};
  for (let char of str1) {
    collection[char] = (collection[char] || 0) + 1;
  }

  for (let c of str2) {
    if (!collection[c]) return false;
    collection[c]--;
  }
  return true;
}

function consecutiveNum(data) {
  if (data.length === 0) return null;
  let max = 0;

  let mydata = new Set(data);
  console.log(mydata);

  for (let num of mydata) {
    let currentMax = 0;
    if (!mydata.has(num - 1)) {
      while (mydata.has(num)) {
        currentMax++;
        num++;
      }
    }
    max = Math.max(max, currentMax);
  }
  return max;
}

// let data1 = [4, 5, 6, 7, 8, 9, 0, 1, -1, 2];
// console.log(consecutiveNum(data1));

function nonRepeatString(str) {
  let max = 0;
  let start = 0;
  let seen = {};

  for (let end = 0; end < str.length; end++) {
    let char = str[end];
    if (seen[char]) {
      start++;
    }
    seen[char] = end;
    max = Math.max(max, end - start + 1);
  }
  return max;
}

// let str = "mtesttest";
// console.log(nonRepeatString(str));

function maxSubArray(data) {
  let max = data[0];
  let activeTotal = 0;
  for (let i = 0; i < data.length; i++) {
    activeTotal = activeTotal + data[i];
    if (activeTotal > max) {
      max = activeTotal;
      console.log(max);
    }
  }
  return max;
}

let data = [3, 4, 5, 6, -1, -2, -1, 3];
console.log(maxSubArray(data));
