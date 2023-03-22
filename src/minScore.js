/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */

/* 
   Minimum Score of a Path Between Two Cities
   1. 노드 1에서 직간접적으로 연결된 모든 엣지에서 최소 거리를 취합한다.(문제에서 1과 n은 항상 연결되있으므로 노드1에 대한 연결만 확인하면 된다.)
   2. 각 노드에 최소거리를 추적한다. 여기서 minDist[i]에는 노드 i에서 연결된 다른 각 노드와의 최소 거리 입니다.
   3. Union Find를 사용해 노드를 연결한다.
   4. 노드 1에 연결된 모든 노드에서 최소 거리를 가져온다.

   Union Find
   find: 재귀적으로 x의 근을 찾고 , 아래에서 위로 루트까지의 경로를 따라 모든 근을 설정합니다.
   union:
    - (rootX,rootY) 중에서 순위(rank)가 작은 쪽의 루트를 순위가 큰쪽의 루트로 변경 
      ex) this.rank[rootX] > this.rank[rootY] => this.root[rootY] = rootX
    - 순위(rank)가 같으면 어느쪽이든 설정하고(여기선 rootX를 루트로 설정) x의 순위를 1증가 시킨다.
     ex) this.rank[rootX] === this.rank[rootY] => this.root[rootY] = rootX; this.rank[rootX]++;

*/
var minScore = function (n, roads) {
  let uf = new UnionFind(n + 1);
  let minDist = Array(n + 1).fill(Infinity);
  for (let [a, b, distance] of roads) {
    minDist[a] = Math.min(minDist[a], distance);
    minDist[b] = Math.min(minDist[b], distance);
    uf.union(a, b);
  }

  let ans = Infinity;
  for (let i = 1; i <= n; i++) {
    if (uf.find(i) === uf.find(1)) {
      ans = Math.min(ans, minDist[i]);
    }
  }
  return ans;
};

class UnionFind {
  constructor(size) {
    this.root = Array(size);
    this.rank = Array(size);
    for (var i = 0; i < size; i++) {
      this.root[i] = i;
      this.rank[i] = 1;
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
        this.root[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.root[rootX] = rootY;
      } else {
        this.root[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }
  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}
const n = 6,
  roads = [
    [4, 5, 7468],
    [6, 2, 7173],
    [6, 3, 8365],
    [2, 3, 7674],
    [5, 6, 7852],
    [1, 2, 8547],
    [2, 4, 1885],
    [2, 5, 5192],
    [1, 3, 4065],
    [1, 4, 7357],
  ];
console.log(minScore(n, roads));
