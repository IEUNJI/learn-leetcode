/**
 * 插入排序
 * 
 * 将无序的数组排序
 * 子问题：如何将一个元素插入到一个有序数组中
 */

let count = 0; // 执行次数

// 这里的插入没有用二分查找优化 1000 => 500499
function insert(A, i, x) {
  // p 指向下一个需要比较的元素
  // p + 1 指向空位
  let p = i - 1;

  // 最好情况(本身升序)，不执行循环体 N - 1
  // 最坏情况(本身倒序)，执行 i 次
  // 1 + 2 + 3 + ... + (N - 1) + (N - 1)
  // 即：T(n) = N^2 / 2 + N / 2 - 1
  while (p >= 0 && A[p] > x) {
    A[p + 1] = A[p];
    p--;

    count++;
  }

  A[p + 1] = x;
}

function insertionSort(A) {
  // i 指向下一个未排序的元素
  // i 前的元素已经被排序了
  for (let i = 1; i < A.length; i++) { // 执行了 N - 1 次
    insert(A, i, A[i]);
    count++;
  }
}

const A = [];

for (let i = 0; i < 1000; i++) {
  // A.push(i); // 最好情况
  A.unshift(i); // 最坏情况
}

insertionSort(A);
console.log(A);
console.log(count);
