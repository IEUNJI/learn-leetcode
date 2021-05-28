/**
 * 322. 零钱兑换
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  var count = -1;

  function pick(index, decisions) {
    if (index >= coins.length || decisions.reduce((a, b) => (a + b), 0) >= amount) {
      if (decisions.reduce((a, b) => (a + b), 0) === amount) {
        count = count === -1 ? decisions.length : Math.min(decisions.length, count);
      }
      return;
    }

    pick(index, decisions.concat(coins[index]));
    pick(index + 1, decisions.concat(coins[index]));
    pick(index + 1, decisions);
  }

  pick(0, []);

  return count;
};

var coins, amount;

coins = [1, 2, 5], amount = 11; // 3
coins = [2], amount = 3;
coins = [1], amount = 0;
coins = [1], amount = 1;
coins = [1], amount = 2;
coins = [83, 186, 408, 419], amount = 6249; // 20
coins = [3, 7, 405, 436], amount = 8839; // 用例超时

console.log(coinChange(coins, amount));
