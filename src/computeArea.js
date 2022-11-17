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

// 내가한 풀이
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

// 솔루션에서 제공해주는 풀이
var computeAreaIsSolution = () => {
    const areaOfA = (ay2 - ay1) * (ax2 - ax1);
    const areaOfB = (by2 - by1) * (bx2 - bx1);

    // calculate x overlap
    const left = Math.max(ax1, bx1);
    const right = Math.min(ax2, bx2);
    const xOverlap = right - left;

    // calculate y overlap
    const top = Math.min(ay2, by2);
    const bottom = Math.max(ay1, by1);
    const yOverlap = top - bottom;

    let areaOfOverlap = 0;
    // if the rectangles overlap each other, then calculate
    // the area of the overlap
    if (xOverlap > 0 && yOverlap > 0) {
        areaOfOverlap = xOverlap * yOverlap;
    }

    // areaOfOverlap is counted twice when in the summation of
    // areaOfA and areaOfB, so we need to subtract it from the
    // total, to get the toal area covered by both the rectangles
    const totalArea = areaOfA + areaOfB - areaOfOverlap;

    return totalArea;
};
