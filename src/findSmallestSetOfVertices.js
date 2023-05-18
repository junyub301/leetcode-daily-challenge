/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
    let indegrees = Array(n).fill(0);
    for (var [x, y] of edges) {
        indegrees[y]++;
    }
    let res = [];
    for (var i = 0; i < n; i++) {
        if (indegrees[i] === 0) res.push(i);
    }
    return res;
};

console.log(
    findSmallestSetOfVertices(6, [
        [0, 1],
        [0, 2],
        [2, 5],
        [3, 4],
        [4, 2],
    ])
); // [0,3]
console.log(
    findSmallestSetOfVertices(5, [
        [0, 1],
        [2, 1],
        [3, 1],
        [1, 4],
        [2, 4],
    ])
); // [0,2,3]
