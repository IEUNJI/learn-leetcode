// 正则表达式匹配

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  return new RegExp(`^${p}$`).test(s);
};

// var s = "aa", p = "a"; // false
// var s = "aa", p = "a*"; // true
// var s = "ab", p = ".*"; // true
// var s = "aab", p = "c*a*b"; // true
var s = "mississippi", p = "mis*is*p*."; // false

console.log(isMatch(s, p));
