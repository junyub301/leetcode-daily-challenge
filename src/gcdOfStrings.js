/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    function gcd(a, b) {
        return b > 0 ? gcd(b, a % b) : a;
    }

    const len = gcd(str1.length, str2.length);
    return str1.slice(0, len);
};

let str1 = "ABCABC",
    str2 = "ABC";
console.log(gcdOfStrings(str1, str2));
