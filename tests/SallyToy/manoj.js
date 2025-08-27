//find duplicate in an array

// function Anagrams(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   let count = {};
//   for (let c of str1) {
//     count[c] = (count[c] || 0) + 1;
//   }

//   for (let char of str2) {
//     if (!count[char]) return false;
//     count[char]--;
//   }

//   return true;
// }

// let data1 = "sally";
// let data2 = "llysa";
// console.log(Anagrams(data1, data2));

// function PalindromTest(str) {
//   if (str.length === 0) return false;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] != str[str.length - 1 - i]) return false;
//   }
//   return true;
// }

// console.log(PalindromTest("ata"));
// console.log(PalindromTest("abba"));
// console.log(PalindromTest("mmd"));

// let data = [1, 2, 3, 4, 5, 6, 7, 9];
// function FindMissingNumber(data) {
//   let total = ((data[0] + data[data.length - 1]) * (data.length + 1)) / 2;

//   let actual = data.reduce((acc, current) => (acc = acc + current), 0);

//   return total - actual;
// }
// console.log(FindMissingNumber(data));

//to do find the first non repeating character

// function NonRepeat(str) {
//   let collection = new Map();
//   for (let char of str) {
//     collection.set(char, (collection.get(char) || 0) + 1);
//   }

//   for (let [key, value] of collection.entries()) {
//     if (value === 1) return key;
//   }
//   return null;
// }

// console.log(NonRepeat("hheelo"));

//nerge two sorted array

// function MergeTwoSortedArray(data1, data2) {
//   return [...data1, ...data2].sort(a>b? a-b);
// }

// let m2 = [1, 2, 3, 4, 5];
// let m3 = [2, 3, 4, 5, 6, 7];
// console.log(MergeTwoSortedArray(m2, m3));
// console.log(MergeTwoSortedArray(m2, m3));

function lengthOfLongestSubStringWIthoutR(str) {
  let seen = {};
  let start = 0;
  let max = 0;

  for (let end = 0; end < str.length; end++) {
    if (seen[str[end]] >= start) {
      start = seen[char] + 1;
    }

    seen[end] = end;
    max = Math.max(max, end - start + 1);
  }
  return max;
}
console.log(lengthOfLongestSubStringWIthoutR("abcbadef"));

// let myobject = {};
// let str = "mdenst";
// for (let i = 0; i < str.length; i++) {
//   myobject[str[i]] = i;
// }
// console.log(myobject);
