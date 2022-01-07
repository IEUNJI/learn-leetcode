/**
 * 78. 子集
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  var res = [];

  function pick(decisions) {
    if (decisions.length === nums.length) {
      var one = [];

      for (let i = 0; i < nums.length; i++) {
        if (decisions[i]) {
          one.push(nums[i]);
        }
      }

      res.push(one);
      return;
    }

    pick(decisions.concat(true));
    pick(decisions.concat(false));
  }

  pick([]);

  return res;
};

var nums;
nums = [1, 2, 3];
nums = [0];
nums = [];

console.log(subsets(nums));
