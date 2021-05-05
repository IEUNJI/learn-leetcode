/**
 * 决策树
 * 
 * 子集 和 全排列 问题
 *
 */

/**
 * 1. 求 [a, b, c] 的所有子集
 *
 * 解 [a, b, c] [a, b] [a, c] [b, c] [a] [b] [c] [] 共 2^3 个
 */

function findSubSets(S, decisions) {
  // decisions: 决策数组

  // 所有决策都已经完成了
  if (S.length === decisions.length) {
    // 返回结果
    // [a, b, c] [T, T, T]
    const one = [];
    for (let i = 0; i < S.length; i++) {
      if (decisions[i]) {
        one.push(S[i]);
      }
    }
    return [one];
  }

  let r = [];
  r = r.concat(findSubSets(S, decisions.concat(true)));
  r = r.concat(findSubSets(S, decisions.concat(false)));
  return r;
}

const S = ['a', 'b', 'c'];
// console.log(findSubSets(S, []));

/**
 * 2. 求 'abc' 的全排列
 *
 * 解 abc acb bac bca cab cba 共 3! 个
 */

function permutation(str, decisions) {
  // decisions: 已经选择的字符(或索引)
  if (str.length === decisions.length) {
    let one = '';
    for (let j = 0; j < decisions.length; j++) {
      one += str[decisions[j]];
    }
    return one;
  }

  let r = [];
  for (let i = 0; i < str.length; i++) {
    if (decisions.includes(i)) {
      continue;
    }
    r = r.concat(permutation(str, decisions.concat(i)));
  }
  return r;
}

console.log(permutation('abc', [])); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
