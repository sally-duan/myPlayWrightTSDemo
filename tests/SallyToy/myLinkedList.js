class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }
  printAll() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  get(index) {
    let count = 0;
    let current = this.head;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current.data;
  }

  insertAt(index, data) {
    let node = new Node(data);

    let count = 0;
    let current = this.head;
    while (count < index) {
      current = current.next;
      count++;
    }
    node.next = current.next;
    current.next = node;
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head.next;
    }
    let count = 0;
    let current = this.head;
    let previous = null;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = current.next;
  }
}

// let mytoy = new LinkedList();
// mytoy.add(100);
// mytoy.add(200);
// mytoy.add(300);
// mytoy.add(400);
// mytoy.printAll();
// console.log(mytoy.get(2));
// mytoy.insertAt(2, "mmd");
// mytoy.printAll();

// mytoy.removeAt(3);
// mytoy.printAll();

let toy = new LinkedList();
let t = 0;
while (t < 10) {
  toy.add(new Node(t));
  t++;
}
let result = [];

while (t > 0) {
  result.push(toy.get(t - 1));
  t--;
}
for (let item of result) {
  console.log(item.data);
}

let middleData = new LinkedList();
let n = 0;
while (n < 21) {
  middleData.add(n);
  n++;
}

function FindMiddle(data) {
  let fast = data.head;
  let slow = data.head;
  while (fast != null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow.data;
}

let dd = FindMiddle(middleData);
console.log(dd);
