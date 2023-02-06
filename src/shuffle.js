/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    if (n < 2) return nums;
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[i + n]);
    }
    return result;
};

let nums = [2, 5, 1, 3, 4, 7],
    n = 3;
console.log(shuffle(nums, n));
