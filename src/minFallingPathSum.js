/**
 * @param {number[][]} matrix
 * @return {number}
 */

// row === 1 => return matrix[0][0]
// row > 1 일때, row=1부터 (row-1,col-1),(row-1,col),(row-1,col-1) 중 최소값이랑 [row,col]값을 더해 새로운 값으로 설정
// 마지막 row에는 최종으로 계산된 값이 추출되므로 마지막 row에서 최소값을 찾으면 된다.

var minFallingPathSum = function (matrix) {
    if (matrix.length === 1) return matrix[0][0];
    // matrix값을 변경하고 싶지 않아서 새로운 matrix생성
    let newMatrix = matrix.map((v) => [...v]);
    for (let i = 1; i < newMatrix.length; i++) {
        for (let j = 0; j < newMatrix.length; j++) {
            newMatrix[i][j] =
                newMatrix[i][j] +
                Math.min(
                    newMatrix[i - 1][j - 1] || Number.MAX_SAFE_INTEGER,
                    newMatrix[i - 1][j],
                    newMatrix[i - 1][j + 1] || Number.MAX_SAFE_INTEGER
                );
        }
    }
    return Math.min(...newMatrix[newMatrix.length - 1]);
};
minFallingPathSum([
    [100, -42, -46, -41],
    [31, 97, 10, -10],
    [-58, -51, 82, 89],
    [51, 81, 69, -51],
]);
