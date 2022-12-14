/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
    if (nums.length <= 2) return Math.max(...nums);
    let prev = nums[0];
    let max = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        let currMax = Math.max(max, prev + nums[i]);
        prev = max;
        max = currMax;
    }

    return max;
};
