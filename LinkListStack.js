const LinkedList = require("./LinkedList");

class LinkListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(val) {
    this.list.prepend(val);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  getSize() {
    return this.list.size;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  print() {
    return this.list.print();
  }
}

const stack = new LinkListStack();
console.log(stack.isEmpty());
stack.push("First");
stack.push("Second");
stack.push("third");
stack.print();
