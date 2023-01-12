/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function (n, edges, labels) {
    let graph = {};
    for (let edge of edges) {
        let [parent, child] = edge;
        graph[parent] = [...(graph[parent] || []), child];
        graph[child] = [...(graph[child] || []), parent];
    }
    let result = new Array(n);

    function dfs(node, parent) {
        //a~z
        const ans = new Array(26).fill(0);
        for (let child of graph[node]) {
            if (child === parent) continue;
            const res = dfs(child, node);
            for (let i = 0; i < 26; i++) {
                ans[i] += res[i];
            }
        }
        result[node] = ++ans[labels.charCodeAt(node) - "a".charCodeAt(0)];
        return ans;
    }
    dfs(0, -1);
    return result;
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
    labels = "abaedcd";
console.log(countSubTrees(n, edges, labels));
