/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

/* 
     Number of Operations to Make Network Connected
     ※ 적어도 n-1개의 연결이 되어있어야 모든 컴퓨터를 연결할 수 있다.
        즉,다 연결되려면 연결된 구성요소의 수는 n-1이 되어야 한다.

    Solution 1: Union Find
     1. 연결 가능한 컴퓨터를 각각 연결시킨다. => uf.union(x,y)
     2. 총 연결수는 n으로 설정한다.
     3. 두개의 root가 같지 않을 때 총 연결수를 하나씩 줄입니다.
     4. 총 연결 개수 -1의 값을 반환한다.

    Solution 2: 재귀 DFS
    1. 각 노드별 연결된 그래프 구성, 연결이 없는 노드는 빈배열로 구성한다.
    2. dfs를 통해 연결된 구성요소의 수를 찾는다.
        ex) n = 6, connections = [[0, 1],[0, 2],[0, 3],[1, 2],[1, 3]] 일 경우
        graph[0],graph[1],graph[2],graph[3]는 모두 직/간접적으로 연결되어있기 때문에 connected에 +1만 증가
        graph[4],graph[5]는 어디에도 연결되있지 않기에 connected에 각각 + 1씩 증가 
        총 connected는 3
    3. 연결된 수 -1의 값을 반환한다.
        ex) [0,1,2,3], [4], [5]를 모두 연결하려면 연결된 수(connected)에서 -1을 빼야한다.
*/
var makeConnected = function (n, connections) {
  if (connections.length < n - 1) return -1;
  const uf = new UnionFind(n);
  for (let [x, y] of connections) {
    uf.union(x, y);
  }
  return uf.connected - 1;
};

class UnionFind {
  constructor(size) {
    this.connected = size;
    this.root = Array(size);
    this.rank = Array(size);
    for (let i = 0; i < size; i++) {
      this.root[i] = i;
      this.rank[i] = i;
    }
  }

  find(x) {
    if (this.root[x] === x) {
      return x;
    }
    return (this.root[x] = this.find(this.root[x]));
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.root[rootX] = rootY;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.root[rootY] = rootX;
      } else {
        this.root[rootY] = rootX;
        this.rank[rootX]++;
      }
      this.connected--;
    }
  }
}

var makeConnected2 = function (n, connections) {
  if (connections.length < n - 1) return -1;

  let graph = {};
  for (let i = 0; i < n; i++) graph[i] = [];
  for (let [a, b] of connections) {
    graph[a].push(b);
    graph[b].push(a);
  }
  let visited = Array(n);
  let connected = 0;
  for (let i = 0; i < n; i++) {
    connected += dfs(i);
  }

  function dfs(node) {
    if (visited[node]) return 0;
    visited[node] = 1;
    for (let neighbor of graph[node]) {
      dfs(neighbor);
    }
    return 1;
  }
};

const n = 6,
  connections = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 3],
  ];
console.log(makeConnected(n, connections));
console.log(makeConnected2(n, connections));
