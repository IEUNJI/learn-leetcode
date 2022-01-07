/**
 * 搜索旋转排序数组
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  var length = nums.length;
  if (!length) return -1;
  if (length === 1) return nums[0] === target ? 0 : -1;

  var l = 0;
  var r = length - 1;

  while (l <= r) {
    var mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid;

    if (nums[0] <= nums[mid]) { // 左半边有序
      if (nums[0] <= target && target <= nums[mid]) { // 在此区间
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else { // 右半边有序
      if (nums[mid] <= target && target <= nums[length - 1]) { // 在此区间
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  return -1;
};

var nums;
var target;
// 4 7  5
// nums = [4, 5, 6, 7, 0, 1, 2], target = 0; // 4
// nums = [4, 5, 6, 7, 0, 1, 2], target = 3; // -1
nums = [1, 3], target = 1; // -1
console.log(search(nums, target));
