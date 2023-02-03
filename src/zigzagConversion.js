/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows < 2) return s;
    let sArray = Array.from({ length: numRows }, () => "");
    let middleLine = numRows - 2;
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (cnt < numRows) {
            sArray[cnt] += char;
            cnt++;
        } else if (cnt === numRows && middleLine !== 0) {
            sArray[middleLine] += char;
            middleLine--;
        } else if (cnt === numRows && middleLine === 0) {
            cnt = 0;
            middleLine = numRows - 2;
            sArray[cnt] += char;
            cnt++;
        }
    }
    return sArray.join("");
};
