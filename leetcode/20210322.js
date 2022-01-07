// 15. 三数之和

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  var res = [];

  for (var i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    var target = -nums[i];
    var m = nums.length - 1;

    for (var j = i + 1; j < nums.length - 1; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      while (j < m && nums[j] + nums[m] > target) {
        m--;
      }

      if (j === m) {
        break;
      }

      if (nums[j] + nums[m] === target) {
        res.push([nums[i], nums[j], nums[m]]);
      }
    }
  }

  return res;
};

var nums = [-1, 0, 1, 2, -1, -4];
// nums = [0];
// nums = [];
nums = [13, -4, 1, 3, -1, -1, 5, -11, 13, 9, 4, 7, 5, -5, -13, -4, 8, -3, 14, -4, 14, 6, 7, 11, 4, -6, -5, -9, 14, 3, -9, 12, -15, 0, -8, -9, 14, 4, -5, 4, -1, -15, -12, -11, -13, -9, 1, 3, -5, 0, 14, -6, 13, -1, 12, 2, 8, -7, 9, 0, 11, 7, -11, 3, -8, -11, 1, 13, 8, 4, -5, 14, 4, -2, 11, -2, -4, -3, -14, 6, 4, 8, 7, 3, -8, 5, 12, 7, 5, -2, -8, -7, 13, -11, 12, 12, -7, -10, 11, -14];


console.log(threeSum(nums));
