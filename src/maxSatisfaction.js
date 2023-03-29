/**
 * @param {number[]} satisfaction
 * @return {number}
 */

/* 
    Reducing Dishes 
    1. 만족도가 큰값은 가능한 늦게 만족도가 작은값은 가능한 빠르게 계산 한다.
        - 만족도를 내림차순으로 정렬한다.
    2. sum, totalLikeTimeCoefficient을 각각 0 으로 초기화한다.
    3. satisfaction를 루프 
    4. sum에 satisfaction[i]값을 더한다.
    5. sum의 값이 0 보다 클 경우 totalLikeTimeCoefficient에 sum을 더한다.
    6. sum의 값이 0 보다 작을 경우 루프를 빠져나온다. 
        - sum이 0보다 작을 경우 totalLikeTimeCoefficient값이 줄어들기 때문에 최대값이 될수 없다.
    7. totalLikeTimeCoefficient 리턴

    ex)  satisfaction = [-1, -8, 0, 5, -9], sum = 0, totalLikeTimeCoefficient = 0
    sort => [5, 0, -1, -8, -9]
    [5] => 0 + 5 = 0 + sum + totalLikeTimeCoefficient => sum = 5, totalLikeTimeCoefficient = 5
    [0, 5] => 0 + 5 + 5 => 0 + sum + totalLikeTimeCoefficient  => scum = 5, totalLikeTimeCoefficient = 10
    [-1, 0, 5]  => -1 + 5 + (5 + 5) = -1 + sum + totalLikeTimeCoefficient = > sum = 4, totalLikeTimeCoefficient = 14 
            ------- 아래부터는 sum의 값이 0보다 작아 break를 통해 빠져나가지만 예를 위해 전부 계산 ---------
    [-8, -1, 0, 5] => -8 + (-1 + 5) + (5 + 5 + 5) => -8 + sum + totalLikeTimeCoefficient => sum = -4, totalLikeTimeCoefficient = 10
    [-9, -8, -1, 0, 5] => -9 + (-8 + -1 + 5) + (-8 + -1 + 5 + 5 + 5 + 5) => -9 + sum + totalLikeTimeCoefficient => sum = -13, totalLikeTimeCoefficient = -3

*/
var maxSatisfaction = function (satisfaction) {
  satisfaction.sort((a, b) => b - a);
  let n = satisfaction.length,
    sum = 0;
  let totalLikeTimeCoefficient = 0;
  for (let i = 0; i < n; i++) {
    sum += satisfaction[i];
    if (sum < 0) break;
    totalLikeTimeCoefficient += sum;
  }
  return totalLikeTimeCoefficient;
};

const satisfaction = [-1, -8, 0, 5, -9];
console.log(maxSatisfaction(satisfaction));
