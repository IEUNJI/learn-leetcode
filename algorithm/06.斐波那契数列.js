/**
 * 斐波那契数列
 * 
 * 1 1 2 3 5 8 13 21 34 55 89 ...
 * 
 * O(2^n)
 */

function fib(n) {
  return n < 2 ? 1 : fib(n - 1) + fib(n - 2);
}

for (let i = 0; i <= 40; i++) {
  console.log(i, fib(i));
}
