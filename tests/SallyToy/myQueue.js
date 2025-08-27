const Stack = require("./myStack");

class Queue {
  constructor() {
    this.storage = [];
  }
  Enqueue(item) {
    this.storage.push(item);
  }

  Dequeue() {
    let item = this.storage[0];
    this.storage = this.storage.slice(1);
    return item;
  }

  isEmpty() {
    return this.storage.length === 0;
  }
}

let input = "greetings from the earth";
let test = new Queue();
for (let c of input) {
  test.Enqueue(c);
}

let result = [];
while (!test.isEmpty()) {
  let item = test.Dequeue();
  result.push(item);
}
console.log("hello");
console.log(result.join(""));

function PalindromTest(data) {
  let queue = new Queue();
  let stack = new Stack();

  let input = data.toLowerCase().replace(/[^a-z0-9]/g, "");

  console.log(input);
  for (let c of input) {
    queue.Enqueue(c);
    stack.push(c);
  }

  while (!stack.isEmpty() && !queue.isEmpty()) {
    let c = stack.pop();
    let d = queue.Dequeue();

    if (c !== d) {
      return false;
    }
  }
  return true;
}

console.log(PalindromTest("racecar"));

console.log(PalindromTest("hello"));

console.log(
  PalindromTest(
    "Doc, note I dissent. A fast never prevents a fatness. I diet on cod."
  )
);
