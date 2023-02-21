/**
 * @param {number[]} nums
 * @return {number}
 */

//O(n)
var singleNonDuplicate = function (nums) {
    if (nums.length === 1) return 1;
    let i = 0;
    while (i < nums.length - 1) {
        if (nums[i] === nums[i + 1]) {
            i += 2;
            continue;
        } else {
            return nums[i];
        }
    }
    return nums[i];
};

//O(logn) || O(1)
var singleNonDuplicate2 = function (nums) {
    let left = 0,
        right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let rightEven = (right - mid) % 2 === 0;
        if (nums[mid - 1] === nums[mid]) {
            // rightEven가 참이면 답은 왼쪽에 있고 그렇지 않으면 답은 오른쪽에 있다.
            if (rightEven) right = mid - 2;
            else left = mid + 1;
        } else if (nums[mid + 1] === nums[mid]) {
            // rightEven가 참이면 답은 오른쪽에 있고 그렇지 않으면 답은 왼쪽에 있다.
            if (rightEven) left = mid + 2;
            else right = mid - 1;
        } else {
            return nums[mid];
        }
    }
    return nums[left];
};

let nums = [3, 3, 7, 7, 10, 11, 11];

console.log(singleNonDuplicate(nums));
console.log(singleNonDuplicate2(nums));
