/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
    const splitReverseStr = s.trim().split(" ").reverse();
    return splitReverseStr.join(" ").replace(/\s{2,}/g, " ");
};
