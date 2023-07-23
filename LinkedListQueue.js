const LinkedList = require("./LinkedList");

class LinkListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(val) {
    this.list.append(val);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

const q = new LinkListQueue();
console.log(q.isEmpty());
q.enqueue(1);
q.enqueue(10);
q.enqueue(100);
q.print();
q.dequeue();
q.print();
