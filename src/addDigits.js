/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    while (num >= 10) {
        let quotient = Math.floor(num / 10);
        let remainder = num % 10;
        num = quotient + remainder;
    }
    return num;
};

/* 
    9의 모든 배수의 합은 9이다.
    Number:         18, 19, 20, 21, 22, 23, 24, 25, 26, 27
    Sum of Digits:  9,  1,  2,  3,  4,  5,  6,  7,  8,  9
    Number % 9:     0,  1,  2,  3,  4,  5,  6,  7,  8,  0
*/
var addDigits2 = function (num) {
    return num === 0 ? 0 : ((num - 1) % 9) + 1;
};

const num = 1;
console.log(addDigits2(num));
38;
