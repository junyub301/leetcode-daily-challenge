/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

/* 
  Reorder Routes to Make All Paths Lead to the City Zero
  1. 방향이 자신을 향하는 방향이면 -1, 다른 노드를 향하는 방향이면 1로 그래프를 구성한다.
  2. 노드 0 부터 재귀적으로 DFS를 시작한다.
  3. 0에서 멀어지는 양의 가중치를 가진 노드가 있으면 이를 반전해야 하므로, 이 모서리수를 카운트한다.

*/
var minReorder = function (n, connections) {
  const graph = {};
  for (let i = 0; i < n; i++) graph[i] = [];
  for (let [a, b] of connections) {
    graph[a].push([b, 1]);
    graph[b].push([a, -1]);
  }
  let seen = Array(n).fill(0),
    ans = 0;
  dfs(0);
  return ans;

  function dfs(node) {
    seen[node] = 1;
    for (let [nei, weight] of graph[node]) {
      if (seen[nei]) continue;
      if (weight > 0) ans++;
      dfs(nei);
    }
  }
};

const n = 6,
  connections = [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ];
console.log(minReorder(n, connections));
