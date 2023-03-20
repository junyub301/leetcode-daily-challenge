/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

/* 
    Can Place Flowers
    1. flowerbed[i]가 1인 경우, i를 +2 증가시킨다.
    2. flowerbed[i]가 0인 경우
        2.1 i가 마지막 요소이거나 i+1의 값이 0인 경우, count를 +1 증가시키고, i를 +2 증가시킨다.
        2.2 i가 마지막 요소가 아니고 i+1의 값이 1인 경우, i를 +3 증가시킨다.
*/
var canPlaceFlowers = function (flowerbed, n) {
  let len = flowerbed.length,
    count = 0;
  let i = 0;
  while (i < len) {
    if (flowerbed[i] === 1) i += 2;
    else {
      if (i === len - 1 || flowerbed[i + 1] === 0) {
        count++;
        i += 2;
      } else i += 3;
    }
  }
  return count >= n;
};

const flowerbed = [0, 1, 0, 0, 0],
  n = 1;
console.log(canPlaceFlowers(flowerbed, n));
