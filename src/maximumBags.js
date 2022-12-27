/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function (capacity, rocks, additionalRocks) {
    let gap = capacity.map((val, i) => val - rocks[i]).sort((a, b) => a - b);
    for (let i = 0; i < gap.length; i++) {
        if (gap[i] > 0 && gap[i] - additionalRocks <= 0) {
            additionalRocks = additionalRocks - gap[i];
            gap[i] = 0;
        }
        if (additionalRocks <= 0) {
            break;
        }
    }
    return gap.filter((val) => val === 0).length;
};

maximumBags([2, 3, 4, 5], [1, 2, 4, 4], 2);
