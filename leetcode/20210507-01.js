/**
 * 最长有效括号
 */

// 2 为新增的左右括号
// dp[i-1] 为内部有效长度
// dp[i - dp[i-1] - 1]为与右括号对应的索引
// dp[i - dp[i-1] - 2]为外部有效的长度
// 状态转移方程：dp[i] = 2 + dp[i-1] + dp[i - dp[i-1] - 2]

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  var dp = Array.from({ length: s.length }, item => 0);

  for (var i = 0; i < s.length; i++) {
    if (s[i] === ')' && s[i - dp[i - 1] - 1] === '(') {
      dp[i] = 2 + (dp[i - 1] || 0) + (dp[i - (dp[i - 1] || 0) - 2] || 0);
    } else {
      continue;
    }
  }

  return Math.max(0, ...dp);
};

var str;
str = '()(()())';
// str = '(()';
// str = ')()())';
// str = '';
console.log(longestValidParentheses(str));
