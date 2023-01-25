/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function (edges, node1, node2) {
    let n = edges.length;
    let dist1 = new Array(n).fill(Number.MAX_SAFE_INTEGER),
        dist2 = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    dist1[node1] = 0;
    dist2[node2] = 0;
    let visit1 = new Array(n).fill(false),
        visit2 = new Array(n).fill(false);

    function dfs(node, dist, visit) {
        visit[node] = true;
        let neighbor = edges[node];
        if (neighbor !== -1 && !visit[neighbor]) {
            dist[neighbor] = 1 + dist[node];
            dfs(neighbor, dist, visit);
        }
    }
    dfs(node1, dist1, visit1);
    dfs(node2, dist2, visit2);

    let minDistNode = -1,
        // node1에서 minDistNode와 node2에서 minDistNode까지의 거리 사이의 최대값
        minDistTillNow = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        if (minDistTillNow > Math.max(dist1[i], dist2[i])) {
            minDistNode = i;
            minDistTillNow = Math.max(dist1[i], dist2[i]);
        }
    }
    return minDistNode;
};

let edges = [1, 2, 4, -1, -1, 2, 1, -1, 0, -1],
    node1 = 8,
    node2 = 6;
console.log(closestMeetingNode(edges, node1, node2));
