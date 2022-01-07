// 3. 无重复字符的最长子串

/**
 * @param {string} s
 * @return {number}
 */
// 暴力循环
// var lengthOfLongestSubstring = function (s) {
//   var len = 0;

//   var maxLen = new Set(s).size;

//   for (var i = maxLen; i > 0; i--) {
//     for (var j = 0; j <= s.length - i; j++) {
//       var frg = s.slice(j, j + i);
//       if (frg.length === new Set(frg).size) {
//         return frg.length;
//       }
//     }
//   }

//   return len;
// };

// 视窗移动
var lengthOfLongestSubstring = function (s) {
  var len = 0;
  var temp = [];

  for (var i = 0; i < s.length; i++) {
    var idx = temp.indexOf(s[i]);
    if (idx > -1) {
      temp = temp.slice(idx + 1);
    }
    temp.push(s[i]);
    len = Math.max(temp.length, len);
  }

  return len;
};

var s = 'abcabcbb';

console.log(lengthOfLongestSubstring(s));
