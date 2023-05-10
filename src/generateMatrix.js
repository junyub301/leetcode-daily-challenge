/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let result = Array.from({ length: n }, () => Array(n));

    let i = 1;
    let colStart = 0,
        colEnd = n - 1;
    let rowStart = 0,
        rowEnd = n - 1;
    while (colStart <= colEnd && rowStart <= rowEnd) {
        for (let col = colStart; col <= colEnd; col++) {
            result[rowStart][col] = i;
            i++;
        }
        for (let row = rowStart + 1; row <= rowEnd; row++) {
            result[row][colEnd] = i;
            i++;
        }
        if (rowStart !== rowEnd) {
            for (let col = colEnd - 1; col >= colStart; col--) {
                result[rowEnd][col] = i;
                i++;
            }
        }

        if (colStart !== colEnd) {
            for (let row = rowEnd - 1; row >= rowStart + 1; row--) {
                result[row][colStart] = i;
                i++;
            }
        }
        colStart++, colEnd--, rowStart++, rowEnd--;
    }
    return result;
};

const n = 3;
console.log(generateMatrix(n));
