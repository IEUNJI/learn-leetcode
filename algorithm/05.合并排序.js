/**
 * 合并排序
 * (归并排序, 分治策略)
 * 将原数组拆分成若干份，并分而治之，然后合并
 *
 * 之前学过的插入排序和冒泡排序都是O(n^2)的
 * 归并排序的复杂度是Θ(nlogn)
 * 即最好最坏的情况都是nlogn
 *
 */

// 子问题：如何合并2个有序的数组
let count = 0;
function merge(A, p, q, r) {
  // p 是左侧数组的起始位置
  // q 是左侧数组的结束位置+1，也是右侧数组的起始位置
  // r 是右侧数组的结束位置
  // q - p 是左侧数组的个数
  // r - q 是右侧数组的个数
  const A1 = A.slice(p, q);
  const A2 = A.slice(q, r);
  A1.push(Number.MAX_SAFE_INTEGER); // 追加哨兵
  A2.push(Number.MAX_SAFE_INTEGER);

  // 循环不变式
  for (let k = p, i = 0, j = 0; k < r; k++) {
    // k 是下一个回写位置
    // i 是左侧数组的指针
    // j 是右侧数组的指针
    A[k] = A1[i] < A2[j] ? A1[i++] : A2[j++];
    count++;
  }
}

function mergeSort(A, p, r) {
  if (r - p < 2) return;
  const q = Math.ceil((p + r) / 2);
  mergeSort(A, p, q);
  mergeSort(A, q, r);
  merge(A, p, q, r);
}

const A = [];

// 1000 => 500499 插入排序 O(n^2)
// 1000 => 9976 归并排序 O(nlogn)
for (let i = 0; i < 1000; i++) {
  // A.push(i); // 最好
  A.unshift(i); // 最坏
}

mergeSort(A, 0, 1000);
console.log(A);
console.log(count);

/**
 * 复杂度分析：
 * 先拆分，类似二分查找，假设有8项，需要拆分 log8 = 3次
 * 程序执行 2^0 + 2^1 + 2^2 次，等比数列，一共 log8 项
 * 等比数列求和为 2N-1
 * 注意，这里对logn向上取整，所以最坏情况也达不到2N-1
 * 所以拆分阶段的时间复杂度是O(n)
 * 
 * 合并过程，每一层都需要循环n次，但是有 logn 层
 * 所以复杂度为 nlogn
 * 
 * 总体结合后的复杂度为 nlogn
 */
