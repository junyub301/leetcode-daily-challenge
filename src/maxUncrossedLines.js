/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/* 
    Uncrossed Lines
    
    solution: LCS
    
    1. nums1의 길이 +1 nums2의 길이 +1 인 이차원 배열을 만들어 모두 0으로 채운다. => dp
    2. dp의 row / col을 루프
        2-1. nums1[i-1] === nums2[j-1]  => dp[i][j] = dp[i-1][j-1]
        2-2. nums1[i-1] !== nums2[j-1]  => dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]))
        의 값으로 채운다.
    3. dp[nums1.length][nums2.length] 리턴

    ※ LCS의 값을 가져오기 위해 get_lcs 추가 
    1. nums1의 길이 +1 nums2의 길이 +1 인 이차원 배열을 만들어 모두 0으로 채운다. => lcsValues
    2.  dp의 row / col을 루프
        2-1. nums1[i-1] === nums2[j-1]  => lcsValues[i][j] = dp[i-1][j-1]
        2-2. nums1[i-1] !== nums2[j-1]  => lcsValues[i][j] = dp[i-1][j] > dp[i][j-1] ? 2 : 3
        으로 값을 채운다.
    3. get_lcs를 통해 lcs의 방향을 거꾸로 실행한다.
        3-1. i,j중 하나라도 0 이면 리턴
        3-2. matrix[i][j]가 1일경우 => 두개의 값이 같으므로 현재 값을 저장하고, 대각선 방향으로 간다 => get_lcs(i-1,j-1,matrix,nums)
        3-3. matrix[i][j]가 2일경우 => 위로 간다 => get_lcs(i-1,j,matrix,nums)
        3-4. matrix[i][j]가 3일경우 => 왼쪽으로 간다 => get_lcs(i,j-1,matrix,nums)


*/
var maxUncrossedLines = function (nums1, nums2) {
    let n = nums1.length,
        m = nums2.length;
    let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    let lcsValues = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    let group = [];
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                lcsValues[i][j] = 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                lcsValues[i][j] = dp[i - 1][j] > dp[i][j - 1] ? 2 : 3;
            }
        }
    }

    get_lcs(n, m, lcsValues, nums1);

    function get_lcs(i, j, matrix, nums) {
        if (i === 0 || j === 0) return;
        if (matrix[i][j] === 1) {
            group.push(nums[i - 1]);
            return get_lcs(i - 1, j - 1, matrix, nums);
        } else if (matrix[i][j] === 2) return get_lcs(i - 1, j, matrix, nums);
        else if (matrix[i][j] === 3) return get_lcs(i, j - 1, matrix, nums);
    }
    console.log(group.reverse());

    return dp[n][m];
};

const nums1 = [1, 4, 2],
    nums2 = [1, 2, 4];

console.log(maxUncrossedLines(nums1, nums2));
