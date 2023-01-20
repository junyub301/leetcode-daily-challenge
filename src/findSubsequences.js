/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    let result = [],
        n = nums.length;

    function backtrack(start, arr) {
        if (arr.length > 1) result.push([...arr]);
        if (start >= n) return;

        let used = new Set();
        for (let i = start; i < n; i++) {
            if (
                used.has(nums[i]) ||
                (arr.length > 0 && arr[arr.length - 1] > nums[i])
            )
                continue;

            arr.push(nums[i]);
            backtrack(i + 1, arr);
            arr.pop();

            used.add(nums[i]);
        }
    }
    backtrack(0, []);

    return result;
};

let nums = [4, 6, 7, 7];
console.log(findSubsequences(nums));
