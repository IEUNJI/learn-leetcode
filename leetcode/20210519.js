/**
 * 39. 组合总和
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];

  function sumFn(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }

  function pick(index, decisions) {
    if (index > candidates.length - 1) {
      return;
    }

    const sum = sumFn(decisions);

    if (sum === target) {
      result.push(decisions);
    } else if (sum < target) {
      // 要 跳
      pick(index + 1, decisions.concat(candidates[index]));
      // 要 循环
      pick(index, decisions.concat(candidates[index]));
      // 不要 跳
      pick(index + 1, decisions);
    }
  }

  pick(0, []);

  result = result.map(one => one.join(','));
  result = [...new Set(result)];
  result = result.map(one => one.split(',').map(Number));

  return result;
};

let candidates, target;
candidates = [2, 3, 6, 7], target = 7;
candidates = [2, 3, 5], target = 8;

combinationSum(candidates, target);
