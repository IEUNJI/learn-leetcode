/**
 * 堆 Heap
 */

/**
 * 建堆 create/build O(n)
 * 堆化 heapify O(logn)
 * 插入 insert O(logn)
 * 取出 extract O(logn)
 * 修改权重 increase/decrease O(logn)
 */

/**
 * 最大堆 Max Heap
 * 父节点总是大于子节点
 * 顶部是最大值
 */

/**
 * 最小堆 Min Heap
 * 父节点总是小于子节点
 * 顶部是最小值
 */

/**
 * 最大堆化 Max Heapify
 * 和子节点不断比较，将最大值和自己交换
 */

class Heap {
  constructor(data, max = 10000) {
    this.list = new Array(max);

    for (let i = 0; i < data.length; i++) {
      this.list[i] = data[i];
    }

    this.heapSize = data.length;
    this.build();
  }

  build() {
    // 3 2 1 0
    let i = Math.floor(this.heapSize / 2) - 1;

    while (i >= 0) {
      this.maxHeapify(i--);
    }
  }

  maxHeapify(i) { // 不太对
    const current = this.list[i];
    const left = this.list[2 * i + 1];
    const right = this.list[2 * i + 2];

    if (current.key < left.key) {
      this.list[i] = left;
      this.list[2 * i + 1] = current;
    } else if (current.key < right.key) {
      this.list[i] = right;
      this.list[2 * i + 2] = current;
    }
  }
}

const data = [
  { key: 12 },
  { key: 15 },
  { key: 2 },
  { key: 4 },
  { key: 3 },
  { key: 8 },
  { key: 7 },
  { key: 6 },
  { key: 5 }
];

const heap = new Heap(data);
console.log(heap);
