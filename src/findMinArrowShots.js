/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    points.sort((a, b) => a[1] - b[1]);
    let cnt = 1,
        point = points[0][1];
    for (let i = 1; i < points.length; i++) {
        if (point >= points[i][0]) {
            continue;
        }
        cnt++;
        point = points[i][1];
    }
    return cnt;
};

const points = [
    [9, 12],
    [1, 10],
    [4, 11],
    [8, 12],
    [3, 9],
    [6, 9],
    [6, 7],
];
console.log(findMinArrowShots(points));
