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

        /* 
        
        let leftIdx = idx * 2 + 1;
            let rightIdx = idx * 2 + 2;
            let left = this.values[leftIdx];
            let right = this.values[rightIdx];
            let biggerIdx = left > right ? leftIdx : rightIdx;
            let biggerValue = this.values[biggerIdx];
            if (!biggerValue) break;
            if (element < biggerValue) {
                [this.values[biggerIdx], this.values[idx]] = [
                    element,
                    biggerValue,
                ];
                idx = biggerIdx;
            }
            
        */
    }
}

let piles = [
    5245, 2588, 8201, 7419, 797, 3446, 5888, 8036, 2563, 4322, 9498, 3527, 8362,
    1677, 8229, 4685, 3394, 6331, 1072, 6398, 1913, 2795, 8829, 6318, 9073,
    7470, 6445, 4990, 9310, 3436, 6472, 1051, 3251, 3048, 6961, 4678, 4520, 785,
    7500, 5326, 9126, 5527, 1994, 3553, 3552, 3568, 7143, 751, 1330, 1647, 5063,
    7420, 4766, 1241, 1815, 5435, 7436, 8767, 1364, 3534, 36, 1855, 4965, 6908,
    8168, 6593, 4658, 7664, 8152, 9285, 3261, 6312, 131, 2995, 7379, 9864, 3777,
    531, 1853, 7093, 5519, 2197, 8621, 1304, 9015, 6439, 7891, 6696, 9318, 7015,
    5514, 8924, 385, 14, 8319, 6254, 3373, 6517, 2650, 3779, 9205, 7530, 752,
    9540, 965, 7299, 2961, 5991, 206, 7846, 6907, 7650, 2693, 8171, 2358, 6146,
    3845, 2140, 3680, 9729, 9702, 3257, 4873, 9647, 6392, 6935, 7564, 1985,
    7652, 9032, 2818, 6832, 258, 6870, 1391, 1195, 4753, 9308, 7118, 2606, 4297,
    913, 8217, 5171, 9124, 3302, 9232, 7985, 4296, 4763, 1393, 8348, 195, 2971,
    3590, 2249, 3776, 4202, 8803, 1573, 6117, 3724, 1889, 4793, 9776, 195, 4779,
    7998, 8071, 1270, 8813, 5006, 3934, 7914, 1445, 4654, 7367, 119, 2996, 136,
    6088, 4529, 6830, 6394, 4959, 379, 9215, 9714, 6476, 4275, 8580, 8233, 7666,
    6369, 1163, 2957, 4691, 419, 2599, 8257, 6000, 6832, 7823, 9315, 96, 987,
    9620, 4996, 4949, 775, 2423, 8575, 7616, 7559, 8606, 1707, 4757, 1311, 5884,
    2447, 9307, 9643, 9848, 597, 2524, 290, 4357, 9147, 3288, 8183, 1680, 733,
    5813, 845, 5135, 1686, 3471, 6123, 5088, 2145, 1167, 435, 7061, 2690, 193,
    6130, 5468, 529, 6546, 3221, 3284, 8088, 9662, 5941, 981, 1092, 7805, 837,
    7611, 3192, 1190, 3227, 2034, 207, 1469, 4971, 2887, 7122, 6786, 8310, 3807,
    3971, 8025, 5370, 3416, 7703, 1566, 5099, 5086, 4193, 2589, 3332, 4795,
    3181, 728, 6084, 6980,
];
let k = 988;
console.log(minStoneSum(piles, k));
