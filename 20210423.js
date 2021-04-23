// 31. 下一个排列

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  var swap = function (arr, x, y) {
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  };

  var reverse = function (arr, start) {
    var left = start;
    var right = arr.length - 1;

    while (left < right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  };

  var i = nums.length - 2;

  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    var j = nums.length - 1;

    while (j >= 0 && nums[i] >= nums[j]) { // j = 2 nums[i] = 1 nums[j] = 2
      j--;
    }

    swap(nums, i, j);
  }

  reverse(nums, i + 1);
};

var nums;
nums = [1, 2, 3]; // [1, 3, 2]
nums = [3, 2, 1]; // [1, 2, 3]
nums = [1, 1, 5]; // [1, 5, 1]
nums = [1]; // [1]
nums = [1, 3, 2]; // [2, 1, 3]

nextPermutation(nums);
console.log(nums);
