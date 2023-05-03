/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
/* 
     Find the Difference of Two Arrays
     1. 두 배열을 set으로 만들어 중복을 제거한다.
     2. nums1Set과 nums2Set을 루프
     3. 각각의 값이 자신이 아닌 다른 set에 있는지 확인 후 없으면 answer에 push
     
*/

var findDifference = function (nums1, nums2) {
    let nums1Set = new Set(nums1);
    let nums2Set = new Set(nums2);
    let answer = [[], []];
    for (num of nums1Set) {
        if (!nums2Set.has(num)) answer[0].push(num);
    }
    for (num of nums2Set) {
        if (!nums1Set.has(num)) answer[1].push(num);
    }

    return answer;
};

const nums1 = [1, 2, 3],
    nums2 = [2, 4, 6];
console.log(findDifference(nums1, nums2));
