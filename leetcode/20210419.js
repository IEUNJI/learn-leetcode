// 22. 括号生成

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  function createTree(deep) {
    var head = { val: '', left: null, right: null };
    var layer = [head];
    while (deep) {
      var nextLayer = [];
      for (var i = 0; i < layer.length; i++) {
        var left = { val: '(', left: null, right: null };
        var right = { val: ')', left: null, right: null };
        layer[i].left = left;
        layer[i].right = right;
        nextLayer.push(left, right);
      }
      layer = nextLayer;
      deep--;
    }
    layer = [];
    return head;
  }

  var tree = createTree(n * 2);

  var strArr = [];

  function createStr(node, str) {
    str += node.val;
    if (node.left && node.right) {
      createStr(node.left, str);
      createStr(node.right, str);
    } else {
      strArr.push(str);
    }
  }

  createStr(tree, '');

  function isValid(s) {
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
  }

  return strArr.filter(isValid);
};

var n;
n = 3; // ["((()))","(()())","(())()","()(())","()()()"]
// n = 1; // ["()"]

console.log(generateParenthesis(n));
