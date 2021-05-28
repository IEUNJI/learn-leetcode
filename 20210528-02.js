/**
 * 46. 全排列
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  var res = [];

  function pick(decisions) {
    if (decisions.length === nums.length) {
      res.push(decisions);
    }

    for (let i = 0; i < nums.length; i++) {
      if (decisions.includes(nums[i])) continue;

      pick(decisions.concat(nums[i]));
    }
  }

  pick([]);

  return res;
};

var nums;
nums = [1, 2, 3];
nums = [0, 1];
nums = [1];

console.log(permute(nums));
