/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

/* 
    k = 시간당 바나나를 먹을수 있는 개수

    1. left에는 1을 right와 k에는 piles의 최댓값으로 초기 설정한다.
    2. 각각의 더미를 반복하여 speed의 속도로 모든 바나나를 먹었을 때 걸리는 시간을 구한다.
    3. 시간이 h보다 작거나 같을 경우, 즉, k가 충분히 컸지만, speed가 답이 될 수 있을을 의미
        - 현재 설정되어 있는 k와 speed중 최소값을 k에 지정한다.
        - right를 speed로 지정한다.
    4. 시간이 h보다 클경우, 즉, k가 너무 작다는 의미
        - left를 speed+1로 지정한다.
    5. k를 리턴한다.

    

*/
var minEatingSpeed = function (piles, h) {
    let left = 1,
        right = Math.max(...piles);
    let k = right;
    while (left < right) {
        let speed = Math.floor((left + right) / 2);
        let time = finishTime(speed);
        if (time <= h) {
            k = Math.min(k, speed);
            right = speed;
        } else left = speed + 1;
    }

    return k;

    function finishTime(speed) {
        let time = 0;
        for (var pile of piles) {
            time += Math.ceil(pile / speed);
        }
        return time;
    }
};

const piles = [30, 11, 23, 4, 20],
    h = 5;
console.log(minEatingSpeed(piles, h));
