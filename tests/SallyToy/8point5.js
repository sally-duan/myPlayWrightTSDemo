function maxSubArray(data) {
  if (data.length === 0) return null;

  let max = data[0];
  let currentMax = data[0];

  for (let i = 1; i < data.length; i++) {
    // console.log(data[i], currentMax+data[i])
    currentMax = Math.max(data[i], currentMax + data[i]);
    if (currentMax > max) {
      max = currentMax;
    }
  }
  return max;
}

let data = [3, 4, -5, 6, -1, 2, 11, -7];
let result = maxSubArray(data);
console.log(result);

let test = "abcdacdef";

function longestSubStringWithoutRepeat(str) {
  let lastSeen = {};
  let start = 0;
  let maxLength = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // If this character was seen after or at the current start index
    if (lastSeen[char] >= start) {
      // Move start to the position right after the last seen index
      start = lastSeen[char] + 1;
    }

    // Update or add the character's index
    lastSeen[char] = i;

    // Update maxLength if current window is longer
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}