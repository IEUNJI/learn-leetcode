/**
 * 冒泡排序
 * 
 * T(n) = N^2 / 2 - N / 2
 */

function swap(A, m, n) {
  const temp = A[m];
  A[m] = A[n];
  A[n] = temp;
}

let count = 0;
function bubbleSort(A) {
  for (let i = A.length - 1; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      count++;
      if (A[j - 1] > A[j]) {
        swap(A, j - 1, j);
      }
    }
  }
}

const A = [];

for (let i = 0; i < 1000; i++) {
  // A.push(i); // 最好情况
  A.unshift(i); // 最坏情况
  // 最好最坏都一样
}

bubbleSort(A);
console.log(A);
console.log(count);
