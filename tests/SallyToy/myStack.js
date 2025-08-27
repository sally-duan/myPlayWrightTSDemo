class Stack {
  constructor() {
    this.storage = [];
  }
  push(item) {
    this.storage.push(item);
  }

  pop() {
    if (this.storage.length === 0) return null;
    let item = this.storage.pop();
    return item;
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  size() {
    return this.storage.length;
  }

  print() {
    console.log(this.storage.join(" "));
  }
}

module.exports = Stack;

// let sample = new Stack();
// sample.push(true);
// sample.push(1);
// sample.push({ name: "sally" });
// sample.push("mystring is too good");
// console.log(sample);
// console.log(sample.pop());
// console.log(sample.size());
// console.log(sample.peek());
// console.log(sample.isEmpty());
// console.log(sample);

function reverseToy(data) {
  let tool = new Stack();
  if (data.lenght === 0) return null;
  for (let char of data) {
    tool.push(char);
  }

  let result = [];
  while (!tool.isEmpty()) {
    result.push(tool.pop());
  }
  return result;
}
console.log(reverseToy("I am a dog"));

function isBalanced(data) {
  if (data.length === 0) return false;
  let myStack = new Stack();
  for (let c of data) {
    if (c === ")") {
      if (myStack.isEmpty()) return false;
      myStack.storage.pop();
    }
    if (c === "(") myStack.storage.push(c);
  }
  return myStack.storage.length === 0;
}

console.log(isBalanced("()"));
console.log(isBalanced("()()"));
console.log(isBalanced("(()())"));
console.log(isBalanced("(()"));
console.log(isBalanced(")("));
