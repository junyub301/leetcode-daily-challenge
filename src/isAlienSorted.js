/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    let obj = {};
    for (let i = 0; i < order.length; i++) {
        obj[order[i]] = i;
    }
    for (let i = 0; i < words.length - 1; i++) {
        if (words[i] === words[i + 1]) continue;
        for (let j = 0; j < words[i].length; j++) {
            let preChar = words[i][j];
            let nextChar = words[i + 1][j];
            if (obj[preChar] > obj[nextChar] || (preChar && !nextChar)) {
                return false;
            }
            if (obj[preChar] < obj[nextChar]) {
                break;
            }
        }
    }
    return true;
};

let words = ["word", "world", "row"],
    order = "worldabcefghijkmnpqstuvxyz";
console.log(isAlienSorted(words, order));
