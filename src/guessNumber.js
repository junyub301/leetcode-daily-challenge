/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

const PICK_NUM = 2;
const N = 2;
const guess = (num) => {
    if (PICK_NUM > num) return 1;
    if (PICK_NUM < num) return -1;
    if (PICK_NUM === num) return 0;
};

// 내가한 풀이
const guessNumber = (n) => {
    if (guess(n) === 0) return n;
    let low = 0,
        high = n;
    while (low <= high) {
        let num = Math.floor((low + high) / 2);
        let guessNum = guess(num);
        if (guessNum === 0) return num;
        else if (guessNum === 1) {
            low = num;
        } else if (guessNum === -1) {
            high = num;
        }
    }
};

// 솔루션에서 제공해주는 풀이

// Using Binary Search
const guessNumberIsSolution1 = (n) => {
    let low = 1;
    let high = n;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        let res = guess(mid);
        if (res == 0) return mid;
        else if (res < 0) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
};

// Ternary Search
const guessNumberIsSolution2 = (n) => {
    let low = 1;
    let high = n;
    while (low <= high) {
        let mid1 = Math.floor(low + (high - low) / 3);
        let mid2 = Math.floor(high + (high - low) / 3);
        let res1 = guess(mid1);
        let res2 = guess(mid2);
        if (res1 == 0) return mid1;
        if (res2 == 0) return mid2;
        else if (res1 < 0) high = mid1 - 1;
        else if (res2 > 0) low = mid2 + 1;
        else {
            low = mid1 + 1;
            high = mid2 - 1;
        }
    }
    return -1;
};
