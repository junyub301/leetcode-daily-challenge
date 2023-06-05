/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    if (coordinates.length === 2) return true;
    let [firstX, firstY] = coordinates[0];
    let [secondX, secondY] = coordinates[1];
    for (let i = 2; i < coordinates.length; i++) {
        let [x, y] = coordinates[i];
        if ((x - firstX) * (secondY - firstY) !== (y - firstY) * (secondX - firstX)) return false;
    }
    return true;
};

const coordinates = [
    [2, 1],
    [4, 2],
    [6, 3],
];
console.log(checkStraightLine(coordinates));
