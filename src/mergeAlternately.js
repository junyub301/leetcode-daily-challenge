/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let result = "";
    let i = 0,
        j = 0;
    while (i < word1.length || j < word2.length) {
        if (!word1[i]) {
            result += word2[j];
            j++;
        } else if (!word2[j]) {
            result += word1[i];
            i++;
        } else {
            result += word1[i] + word2[j];
            i++;
            j++;
        }
    }
    return result;
};

const word1 = "abcd",
    word2 = "pq";
console.log(mergeAlternately(word1, word2));
