/**
 * 快速排序
 *
 * 分治策略 O(nlogn)
 *
 */

let count = 0;
function swap(A, i, j) {
  [A[i], A[j]] = [A[j], A[i]];
}

function partition(A, lo, hi) {
  const pivot = A[hi - 1];
  let i = lo;
  let j = hi - 1;

  // 小于中心点范围：[lo, i)
  // 未确认范围：[i, j)
  // 大于中心点范围：[j, hi - 1)
  while (i !== j) {
    count++;
    if (A[i] <= pivot) {
      i++;
    } else {
      swap(A, i, --j);
    }
  }
  swap(A, j, hi - 1);

  return j;
}

function qSort(A, lo = 0, hi = A.length) {
  if (hi - lo <= 1) return;
  const p = partition(A, lo, hi);
  qSort(A, lo, p);
  qSort(A, p + 1, hi);
}

const A = [];
for (let i = 0; i < 1000; i++) {
  // A.push(i);
  A.unshift(i);
}
qSort(A);
console.log(A);
console.log(count);
