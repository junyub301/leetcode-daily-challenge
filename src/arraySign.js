/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    if (nums.indexOf(0) !== -1) return 0;
    let negativeNums = nums.filter((val) => val < 0);
    return negativeNums.length % 2 === 0 ? 1 : -1;
};
