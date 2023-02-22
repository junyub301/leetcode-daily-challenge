/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    let left = -Infinity,
        right = 0;
    for (var weight of weights) {
        left = Math.max(left, weight);
        right += weight;
    }
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let groups = 1,
            sum = 0;
        for (var weight of weights) {
            sum += weight;
            if (sum > mid) {
                groups++;
                sum = weight;
            }
        }
        if (groups <= days) right = mid;
        else left = mid + 1;
    }
    return left;
};

let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    days = 5;

console.log(shipWithinDays(weights, days));
