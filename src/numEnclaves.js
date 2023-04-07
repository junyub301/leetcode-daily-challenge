/**
 * @param {number[][]} grid
 * @return {number}
 */

/* 
    Number of Enclaves
    1. 재귀적 DFS를 사용하여 그리드 가장자리에 연결된 모든 땅(1)을 물(0)로 바꾼다. 
    2. 가장자리에 연결되지 않은 땅은 그리드 경계를 벗어날수 없는 땅이므로 땅(1)의 개수를 센다

*/
var numEnclaves = function (grid) {
    const m = grid.length,
        n = grid[0].length;

    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 1) dfs(i, 0);
        if (grid[i][n - 1] === 1) dfs(i, n - 1);
    }

    for (let i = 0; i < n; i++) {
        if (grid[0][i] === 1) dfs(0, i);
        if (grid[m - 1][i] === 1) dfs(m - 1, i);
    }

    let count = 0;
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (grid[i][j] === 1) {
                count++;
            }
        }
    }

    return count;

    function dfs(row, col) {
        grid[row][col] = 0;
        const directions = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1],
        ];
        for (let [y, x] of directions) {
            let newY = row + y,
                newX = col + x;
            if (newY < 0 || newY >= m || newX < 0 || newX >= n || grid[newY][newX] === 0) continue;
            dfs(newY, newX);
        }
    }
};

const grid = [
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
];
console.log(numEnclaves(grid));
