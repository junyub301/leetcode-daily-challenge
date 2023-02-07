/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let lastIdx = {};
    let fruit1, fruit2;
    let max = 0,
        start = 0;
    for (var i = 0; i < fruits.length; i++) {
        let fruit = fruits[i];
        lastIdx[fruit] = i;
        if (fruit !== fruit1 && fruit !== fruit2) {
            max = Math.max(max, i - start);
            if (i > 0 && fruits[i - 1] === fruit1) {
                start = lastIdx[fruit2] !== undefined ? lastIdx[fruit2] + 1 : 0;
                fruit2 = fruit;
            } else {
                start = lastIdx[fruit1] !== undefined ? lastIdx[fruit1] + 1 : 0;
                fruit1 = fruit;
            }
        }
    }
    max = Math.max(max, i - start);
    return max;
};

let fruits = [1, 2, 3, 2, 2];
console.log(totalFruit(fruits));
