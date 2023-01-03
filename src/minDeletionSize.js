/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    let cnt = 0;
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length - 1; j++) {
            if (strs[j].charAt(i) > strs[j + 1].charAt(i)) {
                cnt++;
                break;
            }
        }
    }
    return cnt;
};

let strs = ["cba", "daf", "ghi"];

console.log(minDeletionSize(strs));
