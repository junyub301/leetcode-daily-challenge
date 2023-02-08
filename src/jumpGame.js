/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let left = 0;
    let right = 0;
    let cnt = 0;
    while (right < nums.length - 1) {
        let max = 0;
        for (let i = left; i <= right; i++) {
            max = Math.max(max, nums[i] + i);
        }
        left = right + 1;
        right = max;
        cnt++;
    }
    return cnt;
};

let nums = [7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3];
console.log(jump(nums));
