/**
 * @param {number} n
 * @return {number}
 */

/* 
    Bulb Switcher
    n의 제곱근을 반환한다.
    ex) n = 10 1 => on 0 => off
    round = 1   -> 1 1 1 1 1 1 1 1 1 1
    round = 2   -> 1 0 1 0 1 0 1 0 1 0
    round = 3   -> 1 0 0 0 1 1 1 0 0 0
    round = 4   -> 1 0 0 1 1 1 1 1 0 0
    round = 5   -> 1 0 0 1 0 1 1 1 0 1
    round = 6   -> 1 0 0 1 0 0 1 1 0 1
    round = 7   -> 1 0 0 1 0 0 0 1 0 1
    round = 8   -> 1 0 0 1 0 0 0 0 0 1
    round = 9   -> 1 0 0 1 0 0 0 0 1 1
    round = 10  -> 1 0 0 1 0 0 0 0 1 0

    위에서 보듯이 n의 제곱근 만큼 불이 켜지는걸 알수 있다. 
    n = 1 ~ 3 -> 1
    n = 2 ~ 8 -> 2
    n = 9 ~ 15 -> 3
    ...
*/

var bulbSwitch = function (n) {
    return Math.floor(Math.sqrt(n));
};

const n = 99999999;
console.log(bulbSwitch(n));
