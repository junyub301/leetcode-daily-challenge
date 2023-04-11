/**
 * @param {string} s
 * @return {string}
 */
/* 
    Removing Stars From a String
    1. s를 루프 돌린다.
    2. 문자가 '*'이 아닐 경우 chars 배열에 추가
    3. 문자가 '*'일 경우 chars 배열에서 마지막 값을 뺀다.
    4. chars 배열에 남아있는 값을 문자열로 리턴한다.
*/
var removeStars = function (s) {
    let chars = [];
    for (let char of s) {
        if (char !== "*") {
            chars.push(char);
        } else {
            chars.pop();
        }
    }
    return chars.join("");
};

const s = "leet**cod*e";
console.log(removeStars(s));
