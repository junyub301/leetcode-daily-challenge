/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, apple) {
    let graph = Array(n)
        .fill(0)
        .map(() => []);
    for (let [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }
    let count = 0,
        seen = Array(n).fill(0);
    dfs(0);
    return count;

    function dfs(node) {
        seen[node] = 1;

        let hasApple = apple[node];
        for (let child of graph[node]) {
            if (seen[child]) continue;
            let subtree = dfs(child);
            hasApple = hasApple || subtree;
            if (subtree) count += 2;
        }

        return hasApple;
    }
};
let n = 7,
    edges = [
        [0, 1],
        [0, 2],
        [1, 4],
        [1, 5],
        [2, 3],
        [2, 6],
    ],
    hasApple = [false, false, true, false, true, true, false];
console.log(minTime(n, edges, hasApple));
