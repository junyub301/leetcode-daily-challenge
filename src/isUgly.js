/**
 * @param {number} n
 * @return {boolean}
 */

// 내 풀이

var isUgly = function (n) {
    let num = n;
    for (const number of [2, 3, 5]) {
        while (num % number === 0) {
            num /= number;
        }
    }
    return num === 1;
};

// 솔루션에서 제공해주는 풀이

var isUglyIsSolution = function (n) {
    // A non-positive integer cannot be ugly
    if (n <= 0) {
        return false;
    }

    // Keep dividing dividend by divisor when division is possible.
    const keepDividingWhenDivisible = (dividend, divisor) => {
        while (dividend % divisor == 0) {
            dividend /= divisor;
        }
        return dividend;
    };

    // Factorize by dividing with permitted factors.
    for (const factor of [2, 3, 5]) {
        n = keepDividingWhenDivisible(n, factor);
    }

    // Check if the integer is reduced to 1 or not.
    return n == 1;
};
