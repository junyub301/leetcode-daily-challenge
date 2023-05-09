/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function (matrix) {
    let colLen = matrix[0].length,
        rowLen = matrix.length;
    let colStart = 0,
        colEnd = colLen - 1;
    let rowStart = 0,
        rowEnd = rowLen - 1;
    const result = [];

    while (colStart <= colEnd && rowStart <= rowEnd) {
        for (let col = colStart; col <= colEnd; col++) {
            result.push(matrix[rowStart][col]);
        }
        for (let row = rowStart + 1; row <= rowEnd; row++) {
            result.push(matrix[row][colEnd]);
        }
        if (rowStart !== rowEnd) {
            for (let col = colEnd - 1; col >= colStart; col--) {
                result.push(matrix[rowEnd][col]);
            }
        }
        if (colStart !== colEnd) {
            for (let row = rowEnd - 1; row > rowStart; row--) {
                result.push(matrix[row][colStart]);
            }
        }
        colStart++, colEnd--, rowStart++, rowEnd--;
    }
    return result;
};
/* 
    Spiral Matrix
    1. matrix 첫줄을 추출
    2. res에서 추출한 값 push
    3. 남은 matrix루프
        3-1. 각 row의 마지막값(row) 추출
        3-2. 마지막값이 있으면 res에 push, row.reverse();
    4. matrix.reverse();

    ex) matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]; 
    res = [];
    matrix.length === 3
        curr = [1,2,3]  => res = [1,2,3];
            row = [4,5,6]
                end = 6 => res = [1,2,3,6], row = [5,4]
            row = [7,8,9]
                end = 9 => res = [1,2,3,6,9], row = [8,7]
        matrix = [[8,7],[5,4]]
    matrix.length === 2
        curr = [8,7] => res = [1,2,3,6,9,8,7]
            row = [5,4]
                end = 4 => res = [1,2,3,6,9,8,7,4], row = [5]
        matrix = [[5]]
    matrix.length === 1
        curr = [5] => res = [1,2,3,6,9,8,7,4,5]
    
    


*/
function spiralOrder2(matrix) {
    let res = [];

    while (matrix.length) {
        let curr = matrix.shift();
        res.push(...curr);
        for (let row of matrix) {
            let end = row.pop();
            if (end) {
                res.push(end);
                row.reverse();
            }
        }
        matrix.reverse();
    }
    return res;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(spiralOrder(matrix));
console.log(spiralOrder2(matrix));
