/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let a = s.slice(0, s.length / 2);
    let b = s.slice(s.length / 2);
    let aCnt = 0;
    let bCnt = 0;
    for (let i = 0; i < a.length; i++) {
        let charA = a[i];
        let charB = b[i];
        if (vowels.includes(charA)) aCnt++;
        if (vowels.includes(charB)) bCnt++;
    }

    return bCnt === aCnt;
};

console.log(halvesAreAlike("textbook"));
