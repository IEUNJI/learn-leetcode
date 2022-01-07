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
};

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

/**
 * 数组扁平化
 */

var flatten = function (arr) {
  return arr.reduce((a, b) => {
    if (Array.isArray(b)) {
      return a.concat(flatten(b));
    } else {
      return a.concat(b);
    }
  }, []);
};

/**
 * 数组分组
 * 随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，
 * 要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]
 */

var groupArr = function (arr) {
  arr.sort((a, b) => (a - b));
  arr = [...new Set(arr)];

  var res = [];

  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    var idx = Math.floor(item / 10);

    if (res[idx]) {
      res[idx].push(item);
    } else {
      res[idx] = [item];
    }
  }

  return res.filter(i => i);
};

/**
 * 数组交集 并集
 */

// 交集
var intersection = function (arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
};

// 并集
var union = function (arr1, arr2) {
  var res = arr1.slice(0);

  for (var i = 0; i < arr2.length; i++) {
    if (!res.includes(arr2[i])) {
      res.push(arr2[i]);
    }
  }

  return res;
};

/**
 * 数组去重
 * const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];
 */

var uniqueify = function (arr) {
  var res = [];

  for (var i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }

  return res;
};

/**
 * leetcode 剑指 Offer 03. 数组中重复的数字
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  var map = {};

  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];

    if (map[num]) {
      return num;
    } else {
      map[num] = true;
    }
  }
};

/**
 * 头条：并发调度
 * addTask(1000, '1');
 * addTask(500, '2');
 * addTask(300, '3');
 * addTask(400, '4');
 * output: 2 3 1 4
 * 
 * 一开始 1、2两个任务进入队列
 * 500ms 时，2 完成， 输出 2，任务 3 进入队列
 * 800ms 时， 3 完成， 输出 3， 任务 4 进入队列
 * 1000ms 时， 1 完成， 输出 1
 * 1200ms 时，输出 4
 */

class Scheduler {
  constructor() {
    this.running = [];
    this.pending = [];
    this.max = 2;
  }

  add(task) {
    // 运行队列有空位，放入队列，执行
    if (this.running.length < this.max) {
      this.running.push(task);
      this.execute(task);
    } else { // 没空位，放入等待队列
      this.pending.push(task);
    }
  }

  execute(task) {
    task().then(() => {
      // 任务执行完成，从运行队列删除
      this.running = this.running.filter(t => t !== task);
      // 取等待队列的任务
      const nextTask = this.pending.shift();
      if (nextTask) {
        this.add(nextTask);
      }
    });
  }
}

const scheduler = new Scheduler();

function addTask(delay, output) {
  function task() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(Date.now() - startTime, output);
        resolve();
      }, delay);
    });
  }

  scheduler.add(task);
}

const startTime = Date.now();

// addTask(1000, '1');
// addTask(500, '2');
// addTask(300, '3');
// addTask(400, '4');

/**
 * leetcode 3. 无重复字符的最长子串
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var len = 0;
  var temp = [];

  for (var i = 0; i < s.length; i++) {
    var idx = temp.indexOf(s[i]);

    if (idx > -1) { // 存在就截取掉
      temp = temp.slice(idx + 1);
    }
    temp.push(s[i]);
    len = Math.max(len, temp.length);
  }

  return len;
};

/**
 * leetcode 189. 旋转数组
 * 原地旋转
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length; // 长度为 4 的数组旋转4次等于没旋转，取余

  var temp = nums.slice(-1 * k);

  for (var i = nums.length - 1 - k; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  for (var j = 0; j < k; j++) {
    nums[j] = temp[j];
  }
};

/**
 * leetcode 4. 寻找两个正序数组的中位数
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var res = [];
  var m = 0;
  var n = 0;

  // 合并两个有序数组
  while (m < nums1.length || n < nums2.length) {
    var item1 = nums1[m] || Number.MAX_SAFE_INTEGER;
    var item2 = nums2[n] || Number.MAX_SAFE_INTEGER;

    if (item1 < item2) {
      res.push(item1);
      m++;
    } else {
      res.push(item2);
      n++;
    }
  }

  var middle = Math.floor((res.length - 1) / 2);

  if (res.length % 2 === 0) {
    return (res[middle] + res[middle + 1]) / 2;
  } else {
    return res[middle];
  }
};

/**
 * leetcode 459. 重复的子字符串
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  return (s + s).slice(1, s.length * 2 - 1).includes(s);
};

/**
 * leetcode 217. 存在重复元素
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  var map = {};

  for (var i = 0; i < nums.length; i++) {
    var item = nums[i];

    if (map[item]) {
      return true;
    } else {
      map[item] = true;
    }
  }

  return false;
};

/**
 * 字符串字母大小写取反
 */
var processString = function (str) {
  var res = '';

  for (var i = 0; i < str.length; i++) {
    var item = str[i];
    res += item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
  }

  return res;
};

/**
 * leetcode 5. 最长回文子串
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  var max = 1;

  function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }

  function pick(slicedStr) {
    if (slicedStr.length <= 1) return;

    if (isPalindrome(slicedStr)) {
      max = Math.max(max, slicedStr.length);
    }

    pick(slicedStr.slice(1)); // 去头
    pick(slicedStr.slice(0, slicedStr.length - 1)); // 去尾
  }

  pick(s);

  return max;
};

/**
 * 请实现一个 add 函数，满足以下功能。
 * add(1); 			  // 1
 * add(1)(2);  	  // 3
 * add(1)(2)(3);  // 6
 * add(1)(2, 3);  // 6
 * add(1, 2)(3);  // 6
 * add(1, 2, 3);  // 6
 */

var add = function (...outerArgs) {

  function sum(...innerArgs) {
    outerArgs = outerArgs.concat(innerArgs);

    return sum;
  }

  sum.toString = function () {
    return outerArgs.reduce((a, b) => (a + b), 0);
  };

  return sum;
};

/**
 * createFlow 执行任务控制
 * 需要按照 a, b, 延迟1秒, c, 延迟1秒, d, e, done 的顺序打印
 */

const delay = ms => new Promise(r => setTimeout(r, ms));

const log = console.log;

// createFlow([
//   () => log('a'),
//   () => log('b'),
//   createFlow([() => delay(1000).then(() => log('c'))]),
//   [
//     () => delay(1000).then(() => log('d')),
//     () => log('e')
//   ],
// ]).run(() => log('done'));

function createFlow(tasks) {
  tasks = tasks.reduce((acc, t) => {
    if (typeof t === 'function') { // 简单任务
      acc.push(t);
    } else if (Array.isArray(t)) { // 任务数组
      acc = acc.concat(t);
    } else if (typeof t.run === 'function') { // flow 实例
      acc = acc.concat(t.tasks);
    }

    return acc;
  }, []);

  function run(callback) {
    const next = function () {
      const task = tasks.shift();
      if (task) {
        Promise.resolve(task()).then(next);
      } else {
        callback();
      }
    }

    next();
  }

  return {
    tasks,
    run
  };
}

/**
 * 猿辅导 深度取值
 * console.log(get({ a: { d: { e: 5 } }, b: 2, c: 3 }, 'a.d.e', 10));
 */

var get = function (obj, expr, defaultValue) {
  var exprArr = expr.split('.');

  for (var i = 0; i < exprArr.length; i++) {
    var curExpr = exprArr[i];
    var value = obj[curExpr];
    if (typeof value !== 'undefined') {
      obj = value;
    } else {
      return defaultValue;
    }
  }

  return obj;
}

/**
 * LazyMan 任务调度
 */

class LazyManClass {
  constructor(name) {
    this.timer = null;
    this.queue = [];
    console.log(`Hi I am ${name}`);
    this.triger();
  }

  triger() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.run();
    }, 0);
  }

  run() {
    const next = () => {
      const task = this.queue.shift();

      if (task) {
        Promise.resolve(task()).then(next);
      }
    };

    next();
  }

  sleep(s) {
    const task = () => {
      return new Promise(r => setTimeout(r, s * 1000));
    };
    this.queue.push(task);
    this.triger();

    return this;
  }

  eat(food) {
    const task = () => {
      console.log(`I am eating ${food}`);
    };
    this.queue.push(task);
    this.triger();

    return this;
  }

  sleepFirst(s) {
    const task = () => {
      return new Promise(r => setTimeout(r, s * 1000));
    };
    this.queue.unshift(task);
    this.triger();

    return this;
  }
}

function LazyMan(name) {
  return new LazyManClass(name);
}

// LazyMan('Tony');
// Hi I am Tony

// LazyMan('Tony').sleep(2).eat('lunch');
// Hi I am Tony
// 等待了2秒...
// I am eating lunch

// LazyMan('Tony').eat('lunch').sleep(2).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了2秒...
// I am eating diner

// LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(2).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了2秒...
// I am eating junk food

/**
 * 带有过期时间的 localStorage
 */

class CustomStorage {
  constructor(expires) {
    this.expires = expires;
    this.storage = {};
  }

  get(key) {
    const valueObj = this.storage[key];

    if (!valueObj) {
      return null;
    }

    const { ts, value } = valueObj;

    // 过期了
    if (Date.now() - ts >= this.expires) {
      delete this.storage[key];
      return null;
    } else {
      return value;
    }
  }

  set(key, value) {
    this.storage[key] = {
      ts: Date.now(),
      value
    };
  }
}

/**
 * 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal
 */

function mySetInterVal(fn, t1, t2) {
  var isClear = false;
  var i = 0;

  function execute() {
    if (!isClear) {
      fn();
      i++;
      setTimeout(execute, t1 + i * t2);
    }
  }

  function clear() {
    isClear = true;
  }

  setTimeout(execute, t1 + i * t2);

  return {
    clear
  };
}

function myClearInterVal(timerId) {
  timerId.clear();
}

// var count = 0;

// var timer = mySetInterVal(() => {
//   if (++count === 3) {
//     myClearInterVal(timer);
//   }
//   console.log(1);
// }, 2000, 1000);

/**
 * 某公司 1 到 12 月份的销售额存在一个对象里面
 * 如下：{1:222, 2:123, 5:888}，请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]。
 */

function transformToArr(obj) {
  var res = Array.from({ length: 12 }, i => null);

  Object.keys(obj).forEach(month => {
    res[month - 1] = obj[month];
  });

  return res;
}

/**
 * 蚂蚁金服 笔试题
 * 请实现 find 函数，使下列的代码调用正确
 */

var data = [
  { userId: 8, title: 'title1' },
  { userId: 11, title: 'other' },
  { userId: 15, title: null },
  { userId: 19, title: 'title2' }
];

var find = function (origin) {
  // your code are here...

  const arrayProto = Array.prototype;
  const finderProto = Object.create(arrayProto);

  finderProto.where = function where(rules) {
    const nextOrigin = Object.keys(rules).reduce((acc, key) => {
      return acc.filter(item => {
        return rules[key].test(item[key]);
      });
    }, this);

    return find(nextOrigin);
  };

  finderProto.orderBy = function orderBy(key, by) {
    this.sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];

      return by !== 'desc' ? aVal - bVal : bVal - aVal;
    });

    return this;
  };

  Object.setPrototypeOf(origin, finderProto);

  return origin;
};

// 查找 data 中，符合条件的数据，并进行排序
var result = find(data).where({
  'title': /\d$/
}).orderBy('userId', 'desc');

console.log(result); // [ { userId: 19, title: 'title2' }, { userId: 8, title: 'title1' } ]
