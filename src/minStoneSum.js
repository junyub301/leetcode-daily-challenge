/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function (piles, k) {
    let heap = new MaxBinaryHeap();
    for (let pile of piles) {
        heap.insert(pile);
    }
    for (let i = 0; i < k; i++) {
        let curr = heap.extractMax();
        let remove = Math.floor(curr / 2);
        heap.insert(curr - remove);
        console.log(curr, remove);
    }

    let sum = heap.values.reduce((pre, cur) => pre + cur);
    return sum;
};

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
        return this.values;
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            [this.values[parentIdx], this.values[index]] = [element, parent];
            index = parentIdx;
        }
    }

    extractMax() {
        let max = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.trickleDown();
        }
        return max;
    }

    trickleDown() {
        let idx = 0;
        const element = this.values[idx];
        const length = this.values.length;
        while (true) {
            let leftIdx = idx * 2 + 1;
            let rightIdx = idx * 2 + 2;
            let left, right;
            let swap = null;
            if (leftIdx < length) {
                left = this.values[leftIdx];
                if (left > element) {
                    swap = leftIdx;
                }
            }
            if (rightIdx < length) {
                right = this.values[rightIdx];
                if (
                    (swap === null && right > element) ||
                    (swap !== null && right > left)
                ) {
                    swap = rightIdx;
                }
            }
            if (swap === null) break;
            [this.values[idx], this.values[swap]] = [
                this.values[swap],
                element,
            ];
            idx = swap;
        }
    }
}
