/**
 * @param {number[]} nums
 * @return {number}
 */

/* 
 Number of Zero-Filled Subarrays
 1. 각 인덱스의 값이 0이면 zeros에 +1을 더하고 0이 아닐경우 zeros를 0으로 초기화시킨다.
 2. count에 zeros의 값을 더하여 현재 인덱스에서 0으로 채워진 하위배열의 수를 구한다.  

 ex) 
  [0,0,0] 일 경우
  -> i = 0 : zeros = 1, 구할수 있는 하위 배열은 [0] => 총 구할수 있는 경우는 [0] 로 1개 
  -> i = 1 : zeros = 2, 구할수 있는 하위 배열은 [[0],[0,0]] = 총 구할수 있는 경우는 [[0],[0],[0,0]] 로 3개
  -> i = 2 : zeros = 3, 구할수 있는 하위 배열은 [[0],[0,0],[0,0,0]] => 총 구할수 있는 경우는 [[0],[0],[0] [0,0],[0,0],[0,0,0]]로 6개
  [0,0,0]의 경우 0으로 채워진 하위배열의 수는 총 6개가 된다.
  즉, 연속되는 0이 n개 나올 경우 총 구할수 있는 하위배열은 n + n-1 + n-2 ...+1로 구할 수 있다.

*/
var zeroFilledSubarray = function (nums) {
  let zeros = 0,
    count = 0;
  for (let num of nums) {
    zeros = num === 0 ? zeros + 1 : 0;
    count += zeros;
  }
  return count;
};

const nums = [0, 0, 0, 2, 0, 0];
console.log(zeroFilledSubarray(nums));
