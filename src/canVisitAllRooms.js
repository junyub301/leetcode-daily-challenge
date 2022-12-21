/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    let visited = Array.from({ length: rooms.length }, () => false);
    visited[0] = true;
    let stack = [0];
    while (stack.length) {
        let node = stack.pop();
        for (let val of rooms[node]) {
            if (!visited[val]) {
                visited[val] = true;
                stack.push(val);
            }
        }
    }
    return visited.every((v) => v === true);
};

console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));
