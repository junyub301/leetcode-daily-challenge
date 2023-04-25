var SmallestInfiniteSet = function () {
    this.removed = new Set();
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
    for (let i = 1; i <= 1000; i++) {
        if (!this.removed.has(i)) {
            this.removed.add(i);
            return i;
        }
    }
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
    this.removed.delete(num);
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 *
 *
 *
 */

var obj = new SmallestInfiniteSet();
console.log(obj.addBack(2));
console.log(obj.popSmallest());
console.log(obj.popSmallest());
console.log(obj.popSmallest());
console.log(obj.addBack(1));
console.log(obj.popSmallest());
console.log(obj.popSmallest());
console.log(obj.popSmallest());
