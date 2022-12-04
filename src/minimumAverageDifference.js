/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function (nums) {
    let sum = nums.reduce((pre, cur) => pre + cur, 0);
    if (sum === 0) return 0;
    let min,
        index = 0;
    let leftSum = 0;
    let avg;
    for (let i = 0; i < nums.length; i++) {
        leftSum += nums[i];
        avg = Math.abs(
            Math.floor(leftSum / (i + 1)) -
                (Math.floor((sum - leftSum) / (nums.length - 1 - i)) || 0)
        );
        if (i === 0) {
            min = avg;
        }
        if (min > avg) {
            min = avg;
            index = i;
        }
    }
    return index;
};

// 솔루션에서 제공해주는 풀이

let minimumAverageDifference = function (nums) {
    let n = nums.length;
    let ans = -1;
    let minAvgDiff = Number.MAX_SAFE_INTEGER;

    for (let index = 0; index < n; ++index) {
        // Calculate average of left part of array, index 0 to i.
        let leftPartAverage = 0;
        for (let i = 0; i <= index; ++i) {
            leftPartAverage += nums[i];
        }
        leftPartAverage = Math.floor(leftPartAverage / (index + 1));

        // Calculate average of right part of array, index i+1 to n-1.
        let rightPartAverage = 0;
        for (let j = index + 1; j < n; ++j) {
            rightPartAverage += nums[j];
        }
        // If right part have 0 elements, then we don't divide by 0.
        if (index != n - 1) {
            rightPartAverage = Math.floor(rightPartAverage / (n - index - 1));
        }

        let currDifference = Math.abs(leftPartAverage - rightPartAverage);
        // If current difference of averages is smaller,
        // then current index can be our answer.
        if (currDifference < minAvgDiff) {
            minAvgDiff = currDifference;
            ans = index;
        }
    }

    return ans;
};
