/**
 * @param {number[][]} grid
 * @return {number}
 */


/* 
    Number of Closed Islands
    1. 그리드의 가장자리에 연결된 토지는 섬의 일부가 아니다.
    2. 재귀적 DFS를 사용하여 그리드 가장자리에 연결된 모든 땅(0)을 물(1)로 바꾼다. 
    3. 닫힌섬을 모두 찾기위해 재귀적 DFS를 사용한다.
*/
var closedIsland = function (grid) {
    let y = grid.length , x = grid[0].length;

    for (let i = 0; i < y; i++) {
        if (grid[i][0] === 0) dfs(i, 0)
        if (grid[i][x - 1] === 0) dfs(i, x - 1);
    }

    for (let i = 0; i < x; i++) {
        if (grid[0][i] === 0) dfs(0, i);
        if (grid[y - 1][i] === 0) dfs(y - 1, i);
    }
    

    let count = 0;
    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            if (grid[i][j] === 0) {
                dfs(i, j);
                count++;
            }
        }
    }
    return count;

    function dfs(row, col) {
        grid[row][col] = 1;
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
        for (let [m, n] of directions) {
            let newX = row + m, newY = col + n;
            if (newX < 0 || newX >= y || newY < 0 || newY >= x || grid[newX][newY] === 1) continue;
            dfs(newX,newY)
        }
    }
    
};

const grid = [[1, 1, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 1, 0], [1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0]];
console.log(closedIsland(grid))