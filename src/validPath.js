/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
    let graph = {};
    for (let [a, b] of edges) {
        graph[a] = [...(graph[a] || []), b];
        graph[b] = [...(graph[b] || []), a];
    }

    let stack = [source];
    let visited = {};
    visited[source] = true;
    while (stack.length > 0) {
        let src = stack.pop();
        if (src === destination) return true;
        if (!graph[src]) return false;
        for (let vertex of graph[src]) {
            if (!visited[vertex]) {
                visited[vertex] = true;
                stack.push(vertex);
            }
        }
    }
    return false;
};
