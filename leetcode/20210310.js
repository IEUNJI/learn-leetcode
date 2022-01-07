// 正则表达式匹配

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  var frgs = [];

  for (var i = 0; i < p.length;) {
    var cur = p[i];
    var next = p[i + 1];

    if (next === '*') {
      i += 2;
      frgs.push(cur + next);
    } else {
      i++;
      frgs.push(cur);
    }
  }

  console.log(frgs);

  var searchLen = function (str, target) {
    var i;

    for (i = 0; i < str.length; i++) {
      if (str[i] === target || target === '.') {
        continue;
      } else {
        break;
      }
    }

    return i;
  }

  var skip = false;
  var prevBatch = null;
  var skipLen = 0;

  for (var j = 0; j < frgs.length; j++) {
    var rule = frgs[j];

    // console.log('遗留', prevBatch, rule);

    if (prevBatch) {
      var r = rule;

      if (r.length === 1 && prevBatch !== r) {
        prevBatch = null;
      }
    }

    if (rule.length === 1) {
      if (skip) {
        skip = false;

        if (rule === '.') {
          skip = true;
          skipLen++;
          continue;
        }

        var idx = s.indexOf(rule);

        if (idx >= 0) {
          console.log('需要略过的', s.slice(0, idx));

          if (s.slice(0, idx).length < skipLen) {
            return false;
          } else {
            skipLen = 0;
          }

          s = s.slice(idx);
        } else {
          console.log(`${s}中没${rule}`);
          return false;
        }
      }

      if (prevBatch && prevBatch === rule) {
        prevBatch = null;
        continue;
      }

      if (rule === '.' || rule === s[0]) {
        console.log(`${rule}与${s[0]}相等`);
        s = s.slice(1);
        continue;
      } else {
        console.log(`${rule}与${s[0]}不相等`);
        return false;
      }
    } else {
      rule = rule[0];

      if (skip) {
        skip = false;

        if (rule === '.') {
          skip = true;
          continue;
        }

        var idx = s.indexOf(rule);

        if (idx >= 0) {
          console.log('需要略过的', s.slice(0, idx));

          if (s.slice(0, idx).length < skipLen) {
            return false;
          } else {
            skipLen = 0;
          }
          
          s = s.slice(idx);
        } else {
          console.log(`${s}中没${rule}，没关系，下一个`);
          skip = true;
          continue;
        }
      }

      if (prevBatch && prevBatch === rule) {
        prevBatch = null;
        continue;
      }

      if (rule === '.') {
        skip = true;
        console.log('出现.* 跳过');
        continue;
      }

      var len = searchLen(s, rule);

      if (len > 0) {
        prevBatch = rule;
      }

      s = s.slice(len);

      console.log(`${rule}出现了${len}次，剩余${s}`);
    }
  }

  console.log('最终', s, skip);

  return s === '' || skip;
};

var isMatch1 = function (s, p) {
  return new RegExp(`^${p}$`).test(s);
};

// var s = "aa", p = "a"; // false
// var s = "aa", p = "a*"; // true
// var s = "ab", p = ".*"; // true
// var s = "aab", p = "c*a*b"; // true
// var s = "mississippi", p = "mis*is*p*."; // false
// var s = "mississippi", p = "mis*is*ip*."; // true
// var s = 'abcdeg', p = 'a.*e*ga*'; // true
// var s = 'aaa', p = 'a*a'; // true
// var s = 'aaa', p = "ab*a*c*aw*"; // true
var s = 'a', p = ".*..a*"; // false

console.log(isMatch(s, p));
