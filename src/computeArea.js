/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) => {
    let aArea = (ax2 - ax1) * (ay2 - ay1);
    let bArea = (bx2 - bx1) * (by2 - by1);
    let commonX = Math.min(ax2, bx2) - Math.max(ax1, bx1);
    let commonY = Math.min(ay2, by2) - Math.max(ay1, by1);

    if (commonX > 0 && commonY > 0) {
        return aArea + bArea - commonX * commonY;
    } else {
        return aArea + bArea;
    }
};

var computeAreaIsSolution = () => {};

//17
console.log(computeArea(-2, -2, 2, 2, -4, 3, -3, 4));
//45
console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2));
//4
console.log(computeArea(0, 0, 0, 0, -1, -1, 1, 1));
//17
console.log(computeArea(-2, -2, 2, 2, 3, 3, 4, 4));
