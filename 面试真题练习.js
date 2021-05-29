/**
 * leetcode 491. 递增子序列
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  var res = {};

  function isIncreased(arr) {
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }

  function pick(index, decisions) {
    if (index >= nums.length) {
      if (decisions.length >= 2 && isIncreased(decisions)) {
        var key = decisions.toString();
        if (!res[key]) {
          res[key] = decisions;
        }
      }
      return;
    }

    pick(index + 1, decisions.concat(nums[index]));
    pick(index + 1, decisions);
  }

  pick(0, []);

  return Object.values(res);
};

/**
 * 执行顺序题
 * 1 2 4 false 'success' 3
 */

function order1() {
  const p1 = new Promise((resolve, reject) => {
    console.log(1);

    resolve('success');

    setTimeout(() => {
      reject('fail');
    });
  });

  console.log(2);

  setTimeout(() => {
    console.log(3);
  }, 0);

  console.log(4);

  const p2 = p1.then(
    (res) => {
      console.log(res);
      return res;
    },
    (error) => {
      console.log(error);
      return error;
    }
  );

  console.log(p2 === p1);
}

/**
 * leetcode 233. 数字 1 的个数
 */

/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {

};

/**
 * leetcode 53. 最大子序和
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var max = nums[0];
  var sum = nums[0];

  for (var i = 1; i < nums.length; i++) {
    // sum 大于 0 再和下一项累加，小于 0 就没必要加了，可以舍弃
    if (sum > 0) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }

    max = Math.max(max, sum);
  }

  return max;
};

/**
 * leetcode 415. 字符串相加
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  var res = '';
  var carry = 0;
  var idx1 = num1.length - 1;
  var idx2 = num2.length - 1;

  while (idx1 >= 0 || idx2 >= 0) {
    var m = idx1 >= 0 ? Number(num1[idx1--]) : 0;
    var n = idx2 >= 0 ? Number(num2[idx2--]) : 0;

    var sum = m + n + carry;
    carry = 0;

    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    res = sum + res;
  }

  if (carry !== 0) {
    res = carry + res;
    carry = 0;
  }

  return res;
};

/**
 * 写一个函数，输入int型，返回整数逆序后的字符串。如：输入123，返回“321”。
 * 要求必须用递归，不能用全局变量，输入必须是一个参数，必须返回字符串
 */

var reverseInt = function (int) {
  if (int / 10 > 1) {
    return `${int % 10}${reverseInt(Math.floor(int / 10))}`;
  } else {
    return `${int}`;
  }
};

/**
 * 数组与树的转化
 */

var arr = [
  { id: 1, pid: -1 },
  { id: 2, pid: -1 },
  { id: 3, pid: -1 },
  { id: 4, pid: 1 },
  { id: 5, pid: 4 },
  { id: 6, pid: 3 },
  { id: 7, pid: 5 },
  { id: 118, pid: 10 },
  { id: 119, pid: 110 },
];

var tree = [
  {
    id: 1,
    pid: -1,
    children: [
      { id: 2, pid: 1, children: [{ id: 10, pid: 2 }] },
      { id: 7, pid: 1 },
    ],
  },
  { id: 3, pid: 10 },
];

var arrToTree = function (arr) {
  var res = [];
  var map = {};

  // 先循环一遍 id 映射 item
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    map[item.id] = item;
  }

  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    var pid = item.pid;

    if (!map[pid]) { // 找不到父节点，直接放入 res
      res.push(item);
    } else {
      var pItem = map[pid];

      if (pItem.children) {
        pItem.children.push(item);
      } else {
        pItem.children = [item];
      }
    }
  }

  return res;
};

var treeToArr = function (tree) {
  var res = [];

  function traverse(arr) {
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      var children = item.children;
      delete item.children;

      res.push(item);

      if (children) {
        traverse(children);
      }
    }
  }

  traverse(tree);

  return res;
}

/**
 * leetcode 7. 整数反转
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var flag = x > 0 ? 1 : -1;
  var arr = Math.abs(x).toString().split('');
  var res = 0;

  for (var i = 0; i < arr.length; i++) {
    res += arr[i] * 10 ** i;
  }

  res = flag * res;

  if (res < -1 * 2 ** 31 || res > 2 ** 31 - 1) {
    res = 0;
  }

  return res;
};
