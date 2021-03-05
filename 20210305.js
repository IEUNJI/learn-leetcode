// 1. 两数之和

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 双循环
  for (var i = 0; i < nums.length; i++) {
    var one = nums[i];
    for (var j = i + 1; j < nums.length; j++) {
      var two = nums[j];
      if (one + two === target) {
        return [i, j];
      }
    }
  }
};

var twoSum = function (nums, target) {
  var map = new Map();

  for (var i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  // 第二遍循环查找
  for (var j = 0; j < nums.length; j++) {
    var diff = target - nums[j];

    if (map.has(diff) && map.get(diff) !== j) {
      return [j, map.get(diff)];
    }
  }
};

var twoSum = function (nums, target) {
  var map = new Map();

  // 一遍循环查找
  for (var i = 0; i < nums.length; i++) {
    var one = nums[i];
    var two = target - one;

    if (map.has(two)) {
      return [map.get(two), i];
    } else {
      map.set(one, i);
    }
  }
};

var nums = [2, 7, 11, 15], target = 9;
// var nums = [3, 2, 4], target = 6;
// var nums = [3, 3], target = 6;

console.log(twoSum(nums, target));;
