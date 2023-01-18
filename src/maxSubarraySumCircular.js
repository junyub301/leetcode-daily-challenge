/**
 * @param {number[]} nums
 * @return {number}
 */

// Kadane’s Algorithm(카데인 알고리즘) 사용
var maxSubarraySumCircular = function (nums) {
    let currMinSum = nums[0],
        currMaxSum = nums[0];
    let minSum = nums[0],
        maxSum = nums[0],
        totalSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currMinSum = Math.min(currMinSum + nums[i], nums[i]);
        currMaxSum = Math.max(currMaxSum + nums[i], nums[i]);
        minSum = Math.min(minSum, currMinSum);
        maxSum = Math.max(maxSum, currMaxSum);
        totalSum += nums[i];
    }
    return maxSum <= 0 ? maxSum : Math.max(maxSum, totalSum - minSum);
};

let nums = [1, -2, 3, -2];
console.log(maxSubarraySumCircular(nums));
