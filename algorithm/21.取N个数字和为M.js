/**
 * 取N个数字和为M
 */

// n 个数
// m 和
// i 决策步数
function sum(A, n, m, i = 0, decisions = []) {
  // console.log(`还要取${n}个，剩余的和为${m}，当前决策到第${i}项，已取出的值为${decisions}`);
  if (m === 0 && n === 0) return decisions; // 剩余的和为0，且不需要再取了，找到答案
  if (m < 0) return null; // 剩余的和负数，查找失败
  if (i === A.length) return null; // 超出索引，查找失败

  return sum(A, n - 1, m - A[i], i + 1, decisions.concat(A[i])) ||
    sum(A, n, m, i + 1, decisions);
}

console.log(sum([1, 3, 5, 2, 8], 2, 11));
console.log(sum([1, 3, 5, 2, 8], 4, 3));
