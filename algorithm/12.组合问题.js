/**
 * 组合问题
 *
 */

/**
 * 问题：从 A B C D 四个球种取出 2 个，有多少种组合
 * 数学结果：4 * 3 / (2!) = 6 种组合 (AB AC AD BC BD CD)
 * 
 * 分析：
 * 如果选择A，那么从BCD中再取1个
 * 如果不选择A，那么从BCD中再取2个
 * 
 */

function combination(S, k) {
  // 从 S 中取出 k 个
  if (k === 0 || k === S.length) {
    return [S.slice(0, k)];
  }

  let r = [];
  const [first, ...others] = S; // 取出1个
  // 选择了1个
  r = r.concat(combination(others, k - 1).map(item => [first, ...item]));
  // 未选择这1个
  r = r.concat(combination(others, k));
  return r;
}

const S = ['A', 'B', 'C', 'D'];
console.log(combination(S, 2));
