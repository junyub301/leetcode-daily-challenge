/**
 * @param {string[]} strs
 * @return {number}
 */

/* 
    Similar String Groups
    
    solution1 : union find
    1. 각 단어쌍을 살펴 보고 유사하면 union find로 연결
        1-1. 최대 2개의 문자가 같지 않으면 두 단어가 유사하다.
    2. 단어가 속한 고유한 그룹의 수를 찾는다.

    solution2 : dfs
    1. 방문한 문자열 추적을 위해 visited를 set으로 세팅
    2. strs을 루프 하면서 방문하지 않은 문자열은 dfs로 호출
        2-1. dfs방문시 visited에 추가
        2-2. visited에 없고 두 문자열이 유사할 경우 dfs로 재귀 호출
        2-3. dfs가 종료 되고 나면 groupCount++
    3. groupCount 리턴
     

*/
var numSimilarGroups = function (strs) {
    let n = strs.length;
    let uf = new UnionFind(n);
    let groups = new Set();

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isSimilar(strs[i], strs[j])) {
                uf.union(i, j);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        groups.add(uf.find(i));
    }
    return groups.size;

    function isSimilar(str1, str2) {
        let diffCount = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) diffCount++;
        }
        return diffCount <= 2;
    }
};

class UnionFind {
    constructor(size) {
        this.root = Array(size);
        this.rank = Array(size);
        for (let i = 0; i < size; i++) {
            this.root[i] = i;
            this.rank[i] = 1;
        }
    }
    find(x, y) {
        if (this.root[x] === x) return x;
        return (this.root[x] = this.find(this.root[x]));
    }
    union(x, y) {
        let rootX = this.find(x),
            rootY = this.find(y);
        if (rootX === rootY) return false;
        if (this.rank[rootX] < this.rank[rootY]) {
            this.root[rootX] = rootY;
        } else {
            this.root[rootY] = rootX;
            if (this.root[rootX] === this.root[rootY]) {
                this.rank[rootX]++;
            }
        }
        return true;
    }
}

var numSimilarGroups2 = function (strs) {
    const visited = new Set();
    let groupCount = 0;

    function isSimilar(str1, str2) {
        let diffCount = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) diffCount++;
        }
        return diffCount <= 2;
    }

    for (let str of strs) {
        if (!visited.has(str)) {
            dfs(str);
            groupCount++;
        }
    }

    return groupCount;

    function dfs(str) {
        visited.add(str);
        for (let nextStr of strs) {
            if (!visited.has(nextStr) && isSimilar(str, nextStr)) {
                dfs(nextStr);
            }
        }
    }
};

const strs = ["tars", "rats", "arts", "star"];
console.log(numSimilarGroups(strs));
console.log(numSimilarGroups2(strs));
