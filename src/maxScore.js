class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}
class MinPriorityQueue {
    #values;
    #size;
    constructor() {
        this.#values = [];
        this.#size = 0;
    }

    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        this.#values.push(newNode);
        this.#size++;
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.#size - 1;
        const element = this.#values[index];
        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            let parent = this.#values[parentIdx];
            if (element.priority >= parent.priority) break;
            [this.#values[parentIdx], this.#values[index]] = [element, parent];
            index = parentIdx;
        }
    }

    dequeue() {
        if (this.#size === 0) return -1;

        let min = this.#values[0];
        let end = this.#values.pop();
        this.#size--;
        if (this.#size > 0) {
            this.#values[0] = end;
            this.trickleDown();
        }
        return min;
    }

    trickleDown() {
        let idx = 0;
        let length = this.#values.length;
        const element = this.#values[idx];
        while (true) {
            let leftIdx = idx * 2 + 1;
            let rightIdx = idx * 2 + 2;
            let left, right;
            let swap = null;

            if (leftIdx < length) {
                left = this.#values[leftIdx];
                if (left.priority < element.priority) {
                    swap = leftIdx;
                }
            }
            if (rightIdx < length) {
                right = this.#values[rightIdx];
                if (
                    (swap === null && right.priority < element.priority) ||
                    (swap !== null && right.priority < left.priority)
                ) {
                    swap = rightIdx;
                }
            }

            if (swap === null) break;
            [this.#values[idx], this.#values[swap]] = [this.#values[swap], element];
            idx = swap;
        }
    }
    size() {
        return this.#size;
    }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {
    let nums = [];
    for (let i = 0; i < nums1.length; i++) {
        nums.push([nums1[i], nums2[i]]);
    }

    nums.sort((a, b) => b[1] - a[1]);
    let pq = new MinPriorityQueue();
    let sum = 0,
        maxScore = 0;
    for (let i = 0; i < nums.length; i++) {
        pq.enqueue(nums[i][0], nums[i][0]);
        sum += nums[i][0];
        if (pq.size() === k) {
            maxScore = Math.max(maxScore, sum * nums[i][1]);
            let min = pq.dequeue();
            sum -= min.value;
        }
    }

    return maxScore;
};
const nums1 = [1, 3, 3, 2],
    nums2 = [2, 1, 3, 4],
    k = 3;
/* const nums1 = [4, 2, 3, 1, 1],
    nums2 = [7, 5, 10, 9, 6],
    k = 1; */
console.log(maxScore(nums1, nums2, k));
