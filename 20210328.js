// 电话号码的字母组合
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  var digitMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };

  function Node(val) {
    this.val = val;
    this.children = [];
  }

  var root = new Node('');
  var curLayer = [root];

  for (var i = 0; i < digits.length; i++) {
    var curDigit = digits[i];
    var curStrs = digitMap[curDigit];

    var nextLayer = [];
    for (var j = 0; j < curStrs.length; j++) {
      var curStr = curStrs[j];

      for (var k = 0; k < curLayer.length; k++) {
        var curNode = curLayer[k];
        var newNode = new Node(curStr);
        curNode.children.push(newNode);
        nextLayer.push(newNode);
      }
    }
    curLayer = nextLayer;
  }

  var res = [];

  function loop(node, str) {
    var val = node.val;
    var children = node.children;

    str += val;

    if (children.length === 0) {
      node !== root && res.push(str);
    } else {
      for (var i = 0; i < children.length; i++) {
        loop(children[i], str);
      }
    }
  }

  loop(root, '');

  return res;
};

var digits;
digits = '234';

console.log(letterCombinations(digits));
