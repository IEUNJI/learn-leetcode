/**
 * 队列
 * 
 * 不能用JavaScript的数组模拟队列，因为dequeue操作对应数组的shift
 * shift复杂度O(n)，而队列的dequeue复杂度为O(1)
 * 
 * 栈可以使用数组模拟
 */

class Queue {
  constructor(max = 1000) {
    this.data = Array(max);
    this.p = 0;
    this.q = 0;
    this.size = 0;
    this.max = max;
  }

  enqueue(item) {
    if (this.size === this.max) {
      throw 'Queue Overflow';
    }
    this.data[this.p++] = item;
    this.size++;
    if (this.p === this.max) {
      this.p = 0;
    }
  }

  dequeue() {
    if (this.size === 0) {
      throw 'Queue Underflow';
    }
    const item = this.data[this.q++];
    this.size--;
    if (this.q === this.max) {
      this.q = 0;
    }
    return item;
  }
}

const queue = new Queue(10);

for (let i = 0; i < 10; i++) {
  queue.enqueue(i);
}

for (let i = 0; i < 10; i++) {
  console.log(queue.dequeue());
}
