/**
 * 斐波那契数列
 * 
 * 1 1 2 3 5 8 13 21 34 55 89 ...
 * 
 * 动态规划
 * O(2^n) => O(n)
 */

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    [b, a] = [a + b, b];
  }
  return b;
}

for (let i = 0; i <= 40; i++) {
  console.log(i, fib(i));
}

/**
 * 爬楼梯
 * 
 * 一次可以爬1级2级...n级
 */

function steps(n) {
  const s = [1, 1];
  for (let i = 2; i <= n; i++) {
    s[i] = s.reduce((a, b) => a + b);
  }
  return s.pop();
}
console.log(steps(3));
