/**
 * @param {string} s
 * @return {boolean}
 */

/* 
    Valid Parentheses
    1. 문자열을 루프하면서 현재 값이 "(", "{", "[" 중 하나일 경우 경우 arr에 push
    2. 현개 값이 "(", "{", "["가 아닐 경우 arr에서 제일 마지막 값을 추출
    3. 마지막값과 현재 값의 괄호의 쌍이 맞으면 통과 틀리면 false 리턴
    4. 루프가 끝나고 arr의 길이가 0이 아닌 경우 false 리턴 arr의 길이가 0이면 true리턴
*/
var isValid = function (s) {
    let arr = [];
    for (let char of s) {
        if (["(", "{", "["].includes(char)) {
            arr.push(char);
        } else {
            let pop = arr.pop();
            if (
                (pop === "(" && char === ")") ||
                (pop === "{" && char === "}") ||
                (pop === "[" && char === "]")
            )
                continue;
            else return false;
        }
    }
    return arr.length === 0;
};

const s = "(";
console.log(isValid(s));
