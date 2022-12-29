/**
 * @param {number[][]} tasks
 * @return {number[]}
 */

// tasks가 길면 time limit
var getOrder = function (tasks) {
    let includeIndexTasks = tasks.map((val, index) => [...val, index]);
    let sortedTasks = includeIndexTasks.sort((a, b) => a[0] - b[0]);

    let currTime = 0;
    let taskIndex = 0;
    let pQ = [];
    let ans = [];

    while (tasks.length > ans.length) {
        if (pQ.length === 0 && currTime < sortedTasks[taskIndex][0]) {
            currTime = sortedTasks[taskIndex][0];
        }

        while (
            taskIndex < sortedTasks.length &&
            sortedTasks[taskIndex][0] <= currTime
        ) {
            pQ.push(sortedTasks[taskIndex]);
            taskIndex++;
        }

        if (pQ.length > 1) {
            pQ.sort((a, b) => {
                if (a[1] === b[1]) return b[2] - a[2];
                else return b[1] - a[1];
            });
        }

        let currTask = pQ.pop();
        ans.push(currTask[2]);
        currTime += currTask[1];
    }

    return ans;
};

var getOrder2 = function (tasks) {
    let n = tasks.length;
    let heap = new PriorityQueue((a, b) => {
        if (Array.isArray(a) && Array.isArray(b)) {
            if (a[1] === b[1]) return a[0] - b[0];
            return a[1] - b[1];
        } else return a - b;
    });
    tasks = tasks.map((val, index) => [index, ...val]);
    tasks.sort((a, b) => a[1] - b[1]);
    let res = [];
    let time = tasks[0][1];
    let i = 0;

    while (i < n || !heap.isEmpty()) {
        if (heap.isEmpty() && time < tasks[i][1]) {
            time = tasks[i][1];
        }

        while (i < n && tasks[i][1] <= time) {
            let [idx, , processingTime] = tasks[i];
            heap.add([idx, processingTime]);
            i++;
        }
        let [index, processTime] = heap.remove();
        res.push(index);
        time += processTime;
    }
    return res;
};

class PriorityQueue {
    constructor(comparator) {
        this.values = [];
        this.comparator = comparator;
        this.size = 0;
    }

    add(val) {
        this.size++;
        this.values.push(val);
        this.bubbleUp();
        return this.values;
    }

    bubbleUp() {
        let idx = this.size - 1;
        let parentIdx = Math.floor((idx - 1) / 2);

        while (
            parentIdx >= 0 &&
            this.comparator(this.values[parentIdx], this.values[idx]) > 0
        ) {
            [this.values[parentIdx], this.values[idx]] = [
                this.values[idx],
                this.values[parentIdx],
            ];
            idx = parentIdx;
            parentIdx = Math.floor((idx - 1) / 2);
        }
    }

    remove() {
        if (this.size === 0) return -1;
        this.size--;
        if (this.size === 0) return this.values.pop();

        let removedVal = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.trickleDown();
        }
        return removedVal;
    }

    trickleDown() {
        let idx = 0;
        const length = this.size;
        while (idx < length && idx < Math.floor(length / 2)) {
            let leftIdx = idx * 2 + 1;
            let rightIdx = idx * 2 + 2;

            if (rightIdx === length) {
                if (this.comparator(this.values[leftIdx], this.values[idx]) > 0)
                    break;
                [this.values[leftIdx], this.values[idx]] = [
                    this.values[idx],
                    this.values[leftIdx],
                ];
                idx = leftIdx;
            } else if (
                this.comparator(this.values[leftIdx], this.values[idx]) < 0 ||
                this.comparator(this.values[rightIdx], this.values[idx]) < 0
            ) {
                if (
                    this.comparator(
                        this.values[leftIdx],
                        this.values[rightIdx]
                    ) <= 0
                ) {
                    [this.values[leftIdx], this.values[idx]] = [
                        this.values[idx],
                        this.values[leftIdx],
                    ];
                    idx = leftIdx;
                } else {
                    [this.values[rightIdx], this.values[idx]] = [
                        this.values[idx],
                        this.values[rightIdx],
                    ];
                    idx = rightIdx;
                }
            } else {
                break;
            }
        }
    }
    isEmpty() {
        return this.size === 0;
    }
}

const tasks = [
    [19, 13],
    [16, 9],
    [21, 10],
    [32, 25],
    [37, 4],
    [49, 24],
    [2, 15],
    [38, 41],
    [37, 34],
    [33, 6],
    [45, 4],
    [18, 18],
    [46, 39],
    [12, 24],
];
console.log(getOrder(tasks));

console.log(getOrder2(tasks));
