/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    if (word.toLowerCase() === word || word.toUpperCase() === word) return true;
    if (word[0] + word.slice(1).toLowerCase() === word) return true;
    return false;
};
