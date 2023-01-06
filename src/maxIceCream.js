/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
    costs.sort((a, b) => a - b);
    let cnt = 0;
    for (let i = 0; i < costs.length; i++) {
        coins -= costs[i];
        if (coins >= 0) {
            cnt++;
        } else {
            break;
        }
    }
    return cnt;
};

const costs = [1, 3, 2, 4, 1];
const coins = 7;
console.log(maxIceCream(costs, coins));
