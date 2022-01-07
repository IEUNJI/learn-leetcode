// 20. 有效的括号

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }

  var leftRightMap = {
    '(': true,
    ')': false,
    '{': true,
    '}': false,
    '[': true,
    ']': false
  };

  var rightToLeft = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  var isLeft = function (char) {
    return leftRightMap[char];
  };

  var arr = [];

  for (var i = 0; i < s.length; i++) {
    var char = s[i];

    if (isLeft(char)) {
      arr.push(char);
    } else {
      var left = rightToLeft[char];

      if (arr[arr.length - 1] !== left) {
        return false;
      } else {
        arr.pop();
      }
    }
  }

  return arr.length === 0;
};

var s;
s = '()';
s = '()[]{}';
s = '(]';
s = '([)]';
s = '{[]}';

console.log(s, isValid(s));
