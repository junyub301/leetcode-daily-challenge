/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let result = [];
    let obj = {};
    for (let num of nums) {
        obj[num] = obj[num] + 1 || 1;
    }
    const sort = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < k; i++) {
        result.push(+sort[i][0]);
    }
    return result;
};

const nums = [1],
    k = 1;
console.log(topKFrequent(nums, k));
