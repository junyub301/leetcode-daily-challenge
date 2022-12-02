/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */

// 내가 푼 풀이
var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false;
    if (word1.split("").sort().join("") === word2.split("").sort().join("")) {
        return true;
    }

    let obj1 = {},
        obj2 = {};
    for (let i = 0; i < word1.length; i++) {
        obj1[word1[i]] = obj1[word1[i]] + 1 || 1;
        obj2[word2[i]] = obj2[word2[i]] + 1 || 1;
    }

    let keys1 = Object.keys(obj1).sort().join("");
    let keys2 = Object.keys(obj2).sort().join("");

    let values1 = Object.values(obj1)
        .sort((a, b) => a - b)
        .join("");
    let values2 = Object.values(obj2)
        .sort((a, b) => a - b)
        .join("");
    return keys1 === keys2 && values1 === values2;
};

// 다른 사람이 푼 풀이
// ^ 연산자 사용
const closeStrings2 = (word1, word2) => {
    if (word1.length !== word2.length) {
        return false;
    }

    let hash1 = Array(26).fill(0),
        hash2 = Array(26).fill(0);

    for (let i = 0; i < word1.length; i++) {
        hash1[word1.charCodeAt(i) - 97] += 1;
        hash2[word2.charCodeAt(i) - 97] += 1;
    }

    for (let i = 0; i < hash1.length; i++) {
        if (!!hash1[i] ^ !!hash2[i]) {
            return false;
        }
    }

    hash1.sort((a, b) => a - b);
    hash2.sort((a, b) => a - b);

    for (let i = 0; i < hash1.length; i++) {
        if (hash1[i] !== hash2[i]) {
            return false;
        }
    }

    return true;
};
