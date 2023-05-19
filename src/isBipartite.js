/* 
    Is Graph Bipartite?
    1. 그래프의 모든 노드는 반대그룹의 노드에 연결된다.즉, 같은 그룹의 노드끼리는 연결되면 안된다.
        ex) 
        - 좋은 예 graph = [[1,3],[0,2],[1,3],[0,2]]
            0(A) ----- 1(B)
             |          |
             |          |
            3(B) ----- 2(A)
        - 안 좋은 예  graph = [[1,2,3],[0,2],[0,1,3],[0,2]
            0(A) --- 1(B)
             |  \    |
             |   \   |
             |    \  |
             |     \ |
            3(B) --- 2(A)
    
    
*/
var isBipartite = function (graph) {
    let map = Array(graph.length).fill("");
    for (let i = 0; i < graph.length; i++) {
        if (!dfs(i)) return false;
    }
    return true;
    function dfs(node) {
        let nodeGroup = map[node];
        for (let nei of graph[node]) {
            if (map[nei] === "") {
                map[nei] = nodeGroup === "A" ? "B" : "A";
                dfs(nei);
            } else if (map[nei] === nodeGroup) {
                return false;
            }
        }
        return true;
    }
};
const graph = [
    [1, 2, 3],
    [0, 2],
    [0, 1, 3],
    [0, 2],
];
console.log(isBipartite(graph));
