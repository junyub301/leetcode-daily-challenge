/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
    let ans = 0,
        num = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "0") {
            ans = Math.min(num, ans + 1);
        } else {
            num++;
        }
    }

    return ans;
};

let s = "0101100011";
console.log(minFlipsMonoIncr(s));
