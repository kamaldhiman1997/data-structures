// Used in printer process, call back queue, cpu task Scheduling
class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  onqueue(ele) {
    this.items[this.rear] = ele;
    this.rear++;
  }

  dequeue() {
    let item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear == this.front;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    return this.items;
  }
}

const q = new Queue();
q.onqueue(1);
q.onqueue(2);
q.onqueue(3);
q.dequeue();
console.log(q.print());
