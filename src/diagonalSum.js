/* 
     Matrix Diagonal Sum
*/
var diagonalSum = function (mat) {
    let len = mat.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += mat[i][i] + mat[i][len - 1 - i];
    }
    if (len % 2 !== 0) {
        let idx = Math.floor(len / 2);
        sum -= mat[idx][idx];
    }
    return sum;
};

const mat = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
];

console.log(diagonalSum(mat));
