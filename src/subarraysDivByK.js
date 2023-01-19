/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
    let len = nums.length,
        pSum = Array(len);
    for (let i = 0; i < len; i++) {
        let preSum = i === 0 ? 0 : pSum[i - 1];
        pSum[i] = preSum + nums[i];
    }
    let sum = { 0: 1 },
        ans = 0;
    for (let i = 0; i < len; i++) {
        let prefixMod = pSum[i] % k;
        if (prefixMod < 0) prefixMod += k;
        if (sum[prefixMod]) ans += sum[prefixMod];
        sum[prefixMod] = (sum[prefixMod] || 0) + 1;
    }
    return ans;
};

var subarraysDivByK2 = function (nums, k) {
    let n = nums.length;
    let prefixMod = 0,
        result = 0;
    let modGroups = new Array(k).fill(0);
    modGroups[0] = 1;

    for (let num of nums) {
        prefixMod = (prefixMod + (num % k) + k) % k;
        result += modGroups[prefixMod];
        modGroups[prefixMod]++;
    }
    return result;
};

let nums = [4, 5, 0, -2, -3, 1],
    k = 5;
console.log(subarraysDivByK(nums, k));
