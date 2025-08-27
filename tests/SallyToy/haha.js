function testRepeat(str, num) {
  let seen = [];
  let repeat = [];

  for (let i = num; i < str.length; i++) {
    for (let j = 0; j <= str.length - i; j++) {
      let sub = str.substring(j, j + i);
      if (seen.indexOf(sub) !== -1) {
        repeat.push(sub);
      } else {
        seen.push(sub);
      }
    }
  }
  return repeat;
}

let input = "abcabcabcdxyzabcd";
console.log(testRepeat("abcabcabcd", 2));
