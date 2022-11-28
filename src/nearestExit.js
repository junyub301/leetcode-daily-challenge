/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
    const visited = [...maze];
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];
    const rows = maze.length;
    const cols = maze[0].length;
    const queue = [[...entrance, 0]];
    visited[entrance[0]][entrance[1]] = "+";
    while (queue.length) {
        let [y, x, cnt] = queue.shift();
        for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            if (
                0 <= ny &&
                ny < rows &&
                0 <= nx &&
                nx < cols &&
                visited[ny][nx] === "."
            ) {
                if (
                    ny === 0 ||
                    ny === rows - 1 ||
                    nx === 0 ||
                    nx === cols - 1
                ) {
                    return cnt + 1;
                }
                visited[ny][nx] = "+";
                queue.push([ny, nx, cnt + 1]);
            }
        }
    }
    return -1;
};
