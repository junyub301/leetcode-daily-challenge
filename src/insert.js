/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let result = [];
    let [newStart, newEnd] = newInterval;
    let mergeStart = newStart,
        mergeEnd = newEnd;
    intervals.forEach((value) => {
        let [start, end] = value;
        if (end < newStart) {
            result.push(value);
        } else if (start > newEnd) {
            result.push(value);
        } else {
            if (mergeStart > start) {
                mergeStart = start;
            }
            if (mergeEnd < end) {
                mergeEnd = end;
            }
        }
    });
    result.push([mergeStart, mergeEnd]);
    return result.sort((a, b) => a[0] - b[0]);
};

let intervals = [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
    ],
    newInterval = [4, 8];
console.log(insert(intervals, newInterval));
