/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    let prev = Array(n).fill(Infinity);
    prev[src] = 0;
    let curr = Array(n).fill(Infinity);
    curr[src] = 0;
    for (var i = 0; i <= k; i++) {
        for (var [from, to, price] of flights) {
            if (prev[from] !== Infinity) {
                curr[to] = Math.min(curr[to], prev[from] + price);
            }
        }
        prev = [...curr];
    }
    return curr[dst] === Infinity ? -1 : curr[dst];
};

let n = 3,
    flights = [
        [0, 1, 100],
        [1, 2, 100],
        [0, 2, 500],
    ],
    src = 0,
    dst = 2,
    k = 1;
console.log(findCheapestPrice(n, flights, src, dst, k));
