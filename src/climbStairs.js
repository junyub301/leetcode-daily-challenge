/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 2) return n;
    let result = 0;
    let a = 1,
        b = 2;
    for (var i = 3; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    return result;
};
