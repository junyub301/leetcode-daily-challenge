/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

//

var sumOfDistancesInTree = function (n, edges) {
    let graph = {};
    let nodes = new Array(n).fill(1);
    let answer = new Array(n).fill(0);
    for (let i = 0; i < n; i++) graph[i] = [];

    for (let [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }

    dfs(0, -1);
    dfs2(0, -1);

    function dfs(node, parent) {
        for (let child of graph[node]) {
            if (child !== parent) {
                dfs(child, node);
                nodes[node] += nodes[child];
                answer[node] += answer[child] + nodes[child];
            }
        }
    }
    function dfs2(node, parent) {
        for (let child of graph[node]) {
            if (child !== parent) {
                answer[child] = answer[node] - nodes[child] + n - nodes[child];
                dfs2(child, node);
            }
        }
    }

    return answer;
};

sumOfDistancesInTree(6, [
    [0, 1],
    [0, 2],
    [2, 3],
    [2, 4],
    [2, 5],
]);
