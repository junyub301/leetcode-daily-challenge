/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    let result = [];
    function dfs(node, paths = []) {
        if (node === graph.length - 1) {
            return result.push([...paths, node]);
        }

        for (let i = 0; i < graph[node].length; i++) {
            let val = graph[node][i];
            dfs(val, [...paths, node]);
        }
    }
    dfs(0);
    return result;
};

allPathsSourceTarget([[2], [], [1]]);
