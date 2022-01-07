/**
 * 在排序数组中查找元素的第一个和最后一个位置
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  var n = nums.length;

  if (n === 0 || target < nums[0] || target > nums[n - 1]) {
    return [-1, -1];
  }

  var l = 0;
  var r = n - 1;

  while (l <= r) {
    if (l === r) {
      return target === nums[l] ? [l, l] : [-1, -1];
    }

    var mid = Math.floor((l + r) / 2);

    if (target > nums[mid]) {
      l = mid + 1;
    } else if (target < nums[mid + 1]) {
      r = mid;
    } else {
      var s = mid;
      var e = mid + 1;

      for (let i = mid; i >= l; i--) {
        if (target !== nums[i]) {
          s = i + 1;
          break;
        } else {
          s = i;
        }
      }

      for (let j = mid + 1; j <= r; j++) {
        if (target !== nums[j]) {
          e = j - 1;
          break;
        } else {
          e = j;
        }
      }

      return [s, e];
    }
  }
};

var nums, target;

nums = [5, 7, 7, 8, 8, 10, 12], target = 8; // [3, 4]
nums = [8, 8, 8, 8, 8, 8, 8], target = 8; // [0, 6]
nums = [5, 7, 7, 8, 8, 10], target = 6; // [-1, -1]
nums = [], target = 0; // [-1, -1]
nums = [1], target = 1; // [0, 0]
nums = [1, 5], target = 1;

var res = searchRange(nums, target);
console.log(res);
