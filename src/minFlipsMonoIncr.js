/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
    let ans = 0,
        num = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "0") {
            // ans + 1 =>  '0'을 '1'로 뒤집기
            // num => 이전의 '1'을 다 '0'으로 뒤집기
            ans = Math.min(num, ans + 1);
        } else {
            num++;
        }
    }

    return ans;
};

let s = "0101100011";
console.log(minFlipsMonoIncr(s));
