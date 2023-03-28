/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */

/* 
    Minimum Cost For Tickets
    1. 여행 마지막 날짜 추출 = lastDay
    2. 무한대로 채워진 lastDay + 1길이의 일별 누적 비용(accumulatedDailyCosts) 배열을 만든다.
    3. accumulatedDailyCosts[0]은 0을 설정한다.
    4. 1부터 lastDay까지 루프
    5. daySet에 i가 포함되어 있지 않으면 accumulatedDailyCosts[i] = accumulatedDailyCosts[i-1]로 먼저 설정
        - i가 포함되어있지 않는건 그날 여행을 가지 않기 때문에 전에 계산했던 비용을 그대로 가져간다.
    6. accumulatedDailyCosts[i] = Math.min(
      accumulatedDailyCosts[i],
      accumulatedDailyCosts[i - 1] + costs[0],
      (accumulatedDailyCosts[i - 7] || 0) + costs[1],
      (accumulatedDailyCosts[i - 30] || 0) + costs[2]
    ); 로 accumulatedDailyCosts[i]를 설정
    7. accumulatedDailyCosts[lastDay] 리턴

    ex) days = [1, 4, 6, 7, 8, 20], costs = [2, 7, 15];
                                                    9일 ~ 19일까지는 여행을 하지않기에 전날 비용을 그대로 가져간다.
                                                             |------------------------------|
        days                  ->  0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
        accumulatedDailyCosts -> [0, 2, 2, 2, 4, 4, 6, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 11]


 */
var mincostTickets = function (days, costs) {
  let lastDay = days[days.length - 1];
  let daySet = new Set(days);
  let accumulatedDailyCosts = Array(lastDay + 1).fill(Infinity);
  accumulatedDailyCosts[0] = 0;
  for (let i = 1; i <= lastDay; i++) {
    if (!daySet.has(i)) {
      accumulatedDailyCosts[i] = accumulatedDailyCosts[i - 1];
    }
    accumulatedDailyCosts[i] = Math.min(
      accumulatedDailyCosts[i],
      accumulatedDailyCosts[i - 1] + costs[0],
      (accumulatedDailyCosts[i - 7] || 0) + costs[1],
      (accumulatedDailyCosts[i - 30] || 0) + costs[2]
    );
  }
  return accumulatedDailyCosts[lastDay];
};

const days = [1, 4, 6, 7, 8, 20],
  costs = [2, 7, 15];
console.log(mincostTickets(days, costs));
