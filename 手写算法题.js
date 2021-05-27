/**
 * 二分查找
 * 适用场景：在已经排序的数据中查找
 */

function bsearch(arr, target) {
  let l = 0; // 左边界
  let r = arr.length - 1; // 右边界
  let guess; // 猜想位置

  while (l <= r) {
    guess = Math.floor((l + r) / 2); // 取左右边界中间的索引

    if (arr[guess] === target) { // 找到
      return guess;
    } else if (arr[guess] > target) { // 目标在左侧区间
      r = guess - 1; // 舍弃右半部分
    } else if (arr[guess] < target) { // 目标在右侧区间
      l = guess + 1; // 舍弃左半部分
    }
  }

  return -1;
}

/**
 * 插入排序 O(N^2)
 * 抓牌，将新牌插入到有序的牌中
 * 子问题：将数据插入到有序的数组中
 */

function insertSort(arr) {
  // 初始只有第一项为有序的，所以从第二项循环
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i]; // 待插入的元素
    let p = i - 1; // 比较索引，从 i 的前一项开始比较
    while (p >= 0 && arr[p] > current) { // 待插入元素小，需要向前移
      arr[p + 1] = arr[p]; // p 向后移动到 p - 1，因为 i 的位置已经被 current 提出，所以可以覆盖
      p--; // 继续比较下一项
    }
    // 待插入元素比 p 位置的大，可以插入到 p + 1 位置
    arr[p + 1] = current;
  }
}

/**
 * 冒泡排序 O(N^2)
 * 双循环，两两交换，将大值不断交换到右侧
 */

function bubbleSort(arr) {
  // i 代表：第几次内层循环完，i 指向第几大的值
  // 第一次循环，内层循环将第一大的值浮上来了
  for (let i = arr.length - 1; i >= 1; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) { // 前面的大于后面的，需要交换
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

/**
 * 归并排序
 * 分治策略，将数组分割成一项的有序数组，再两两合并有序数组
 */

function mergeSort(arr) {
  function split(arr, p, r) {
    if (r - p < 2) return; // 分割只剩一项

    // 向上取整，因为 q 是左侧结束索引 + 1
    const q = Math.ceil((p + r) / 2);

    split(arr, p, q);
    split(arr, q, r);

    // 此时递归结束，开始合并
    merge(arr, p, q, r);
  }

  // p 左侧数组的起始索引
  // q 左侧数组的结束索引+1，即右侧数组的起始索引
  // r 右侧数组的结束索引+1
  // 这样设计的好处是slice直接截取即可
  function merge(arr, p, q, r) {
    const arr1 = arr.slice(p, q);
    const arr2 = arr.slice(q, r);
    // 追加哨兵，保证后续比较到末尾时无需判断索引超界限
    arr1.push(Number.MAX_SAFE_INTEGER);
    arr2.push(Number.MAX_SAFE_INTEGER);

    for (let k = p, i = 0, j = 0; k < r; k++) {
      arr[k] = arr1[i] < arr2[j] ? arr1[i++] : arr2[j++];
    }
  }

  split(arr, 0, arr.length);
}

/**
 * 快速排序
 * 分治策略，取数组最右侧的一项作为中心点，从头遍历，将大于中心点的抛到后面
 * 然后将中心点插入到中心，然后两边数组再重复此过程
 */

function quickSort(arr) {
  // 启动函数
  // lo 低位，hi 高位
  function sort(arr, lo, hi) {
    if (hi - lo < 2) return; // 只剩一项
    // 中心点索引
    const p = part(arr, lo, hi);
    sort(arr, lo, p);
    sort(arr, p + 1, hi);
  }

  // 分治函数
  // 取最右侧的一项作为中心点，然后两侧索引不断靠近
  // 将小于中心点的交换到左侧，大于中心点的交换到右侧
  // 然后将中心点和右侧的第一项交换，返回中心点的索引
  function part(arr, lo, hi) {
    const point = arr[hi - 1];
    let i = lo; // 先指向第一项
    let j = hi - 1; // 先指向最后一项

    while (i !== j) { // 没相遇
      if (arr[i] <= point) { // 小于等于中心点，下一个
        i++;
      } else { // 大于中心点，将该值抛到后面
        // 因为j指向中心点，实际交换的是中心点的前一项
        swap(arr, i, --j);
      }
    }

    // 最后j指向的是大于中心点的第一项，和中心点交换
    swap(arr, j, hi - 1);

    return j;
  }

  function swap(arr, m, n) {
    const temp = arr[m];
    arr[m] = arr[n];
    arr[n] = temp;
  }

  sort(arr, 0, arr.length);
}

/**
 * 决策树 decisions
 */

// 子集问题：求 [a, b, c] 的所有子集
// 解 [a, b, c] [a, b] [a, c] [b, c] [a] [b] [c] [] 共 2^3 个

function findSubSets(arr) {
  function find(arr, decisions) {
    // 决策完毕
    if (arr.length === decisions.length) {
      const one = [];
      for (let i = 0; i < arr.length; i++) {
        if (decisions[i]) {
          one.push(arr[i]);
        }
      }
      return [one]; // concat默认展开，所以这里包了一层
    }

    let res = [];

    // 两种决策 true 代表选，false 代表不选
    res = res.concat(find(arr, decisions.concat(true)));
    res = res.concat(find(arr, decisions.concat(false)));

    return res;
  }

  return find(arr, []);
}

// 全排列问题：求 'abc' 的全排列
// 解 abc acb bac bca cab cba 共 3! 个

function permutation(str) {
  function per(str, decisions) {
    // 决策完毕
    if (str.length === decisions.length) {
      let one = '';
      for (let j = 0; j < decisions.length; j++) {
        one += str[decisions[j]];
      }
      return one;
    }

    let res = [];

    // 多种决策，决策数组里是索引
    for (let i = 0; i < str.length; i++) {
      if (decisions.includes(i)) {
        // 包含的索引就不再继续决策了
        continue;
      }

      res = res.concat(per(str, decisions.concat(i)));
    }

    return res;
  }

  return per(str, []);
}

// 组合问题：从 A B C D 四个球种取出 2 个，有多少种组合
// 解 4 * 3 / (2!) = 6 种组合 (AB AC AD BC BD CD)
// 分析：如果选A，从BCD中再取1个，不选A，从BCD中选2个
function take(arr, count) {
  if (count === 0 || count === arr.length) {
    return [arr.slice(0, count)];
  }

  let res = [];
  // 取出一个
  const [first, ...others] = arr;
  // 选这个
  res = res.concat(take(others, count - 1).map(item => [first, ...item]));
  // 不选这个
  res = res.concat(take(others, count));
  return res;
}

/**
 * 斐波那契数列
 * 1 1 2 3 5 8 13 21 34 55 89 ...
 * 动态规划：适用场景为递归且具有重复的子结构
 */

// 复杂度 O(2^n)) 不可用的算法
// 很多重复的子结构被反复计算
function slowFib(n) {
  return n < 2 ? 1 : slowFib(n - 1) + slowFib(n - 2);
}

function fastFib(n) {
  let a = 1;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    [b, a] = [a + b, b];
  }

  return b;
}

/**
 * 爬楼梯
 * 
 * 爬 n 级楼梯，每次可以爬 every 级
 */
// 分析：每次可以爬3级
// f(n) = f(n-1) + f(n-2) + f(n-3)
// 如果爬2级就是两项相加，n级就是n项相加
// 0 1 2 3 4 5
// 1 1 2 4 7 13

// 每次可爬 2 级
function steps2(n) {
  const s = [1, 1];
  for (let i = 2; i <= n; i++) {
    s[i] = s[i - 1] + s[i - 2];
  }
  return s.pop();
}

// 每次可爬 n 级
function stepsn(n) {
  const s = [1, 1];
  for (let i = 2; i <= n; i++) {
    s[i] = s.reduce((acc, item) => (acc + item), 0);
  }
  return s.pop();
}
