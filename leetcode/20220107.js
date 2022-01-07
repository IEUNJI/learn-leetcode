/**
 * 136. 只出现一次的数字
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var map = new Map();

  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];

    if (map.has(num)) {
      map.delete(num);
    } else {
      map.set(num, true);
    }
  }

  return map.keys().next().value;
};

var nums;
nums = [2, 2, 1];
nums = [4, 1, 2, 1, 2];

console.log(singleNumber(nums));
