/**
 * 计数排序
 *
 * 非比较排序
 *
 * 需要有正整数的key
 *
 * O(n)
 *
 */

let count = 0;
function countingSort(A) {
  const max = Math.max(...A);
  // 累计数组
  const B = Array(max + 1).fill(0);
  // 结果数组
  const C = Array(A.length);

  // 累计数组递增
  for (let i = 0; i < A.length; i++) {
    count++;
    B[A[i]]++;
  }
  // 累计求和
  for (let j = 1; j < B.length; j++) {
    count++;
    B[j] = B[j - 1] + B[j];
  }

  // 结果取出
  for (let k = 0; k < A.length; k++) {
    count++;
    const p = B[A[k]] - 1;
    B[A[k]]--;
    C[p] = A[k];
  }

  return C;
}

const A = [];
for (let i = 0; i < 1000; i++) {
  A.unshift(i);
}
console.log(countingSort(A));
console.log(count);
