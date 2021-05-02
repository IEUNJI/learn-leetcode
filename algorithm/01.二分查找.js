/**
 * 二分查找
 *
 * 对已经排序的数据，比如按照拼音排序的试卷
 *
 * 1000的数据规模，最坏的情况需要查找多少次？
 * 2^9 = 512    2^10 = 1024
 * T(1000) = ⌊log2 1000⌋ + 1 = ⌊lg1000 / lg2⌋ + 1 = 9 + 1 = 10
 * T(n) = ⌊log2 n⌋ + 1
 * 
 * 循环不变式
 *
 */

let count = 0; // 查找次数
function bsearch(A, x) {
  let l = 0; // 查找范围的左边界
  let r = A.length - 1; // 查找范围的右边界
  let guess; // 猜想位置

  while (l <= r) {
    count++;
    guess = Math.floor((l + r) / 2);

    // 循环不变式
    if (A[guess] === x) {
      return guess;
    } else if (A[guess] > x) {
      r = guess - 1;
    } else if (A[guess] < x) {
      l = guess + 1;
    }
  }

  return -1;
}

const A = [3, 5, 19, 22, 25, 33, 45, 47, 57, 66, 71, 78]; // 12项，最坏log2 12 + 1 = 4次
// console.log(bsearch(A, 88), count);
// console.log(bsearch(A, 68), count);
console.log(bsearch(A, 22), count);
