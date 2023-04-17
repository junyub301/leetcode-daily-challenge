/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

/*
    Kids With the Greatest Number of Candies
    1. candies에서 최댓값 추출
    2. candies를 루프
    3. 현재 값 + extraCandies의 값이 max값보다 크거가 같을 경우 true, 작을 경우 false
 */
var kidsWithCandies = function (candies, extraCandies) {
    const max = Math.max(...candies);
    return candies.map((val) => {
        if (val + extraCandies >= max) {
            return true;
        }
        return false;
    });
};

const candies = [2, 3, 5, 1, 3],
    extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));
