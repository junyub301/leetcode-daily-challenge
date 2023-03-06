/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

/* 
    1. 누락된 숫자의 수가 k보다 작은 array[index]중 가장 오른쪽 인덱스를 찾는다.
        ex) array = [2,3,4,7,11] , k = 5 일 경우,
            index가 5일 경우 누락된 수가 [1,5,6,8,9,10]로 6개가 되므로 인덱스가 5보다는 작아야 하고
            index가 4보다 작을 경우 누락된 수가 [1]로 1개,
            index가 4일 경우 누락된 수가 [1,5,6]로 3개가 된다.
            이중 k보다 작으면서 가장 큰 index는 4이므로
            기준이 되는 인덱스는 4가된다.
    2. 그 후 array[index] + (k - 누락된 숫자의 수 )를 반환한다.
    
    edge case: k가 array의 첫번째 요소보다 작을 경우 k를 반환한다.
*/

var findKthPositive = function (arr, k) {
    let low = 0,
        high = arr.length - 1;
    while (low < high) {
        let mid = Math.ceil((low + high) / 2);
        if (countMissingNumber(mid) >= k) high = mid - 1;
        else low = mid;
    }
    let extraAdd = k - countMissingNumber(low);
    if (low === 0 && countMissingNumber(low) >= k) return k;
    return arr[low] + extraAdd;

    function countMissingNumber(idx) {
        return arr[idx] - (idx + 1);
    }
};

const arr = [2, 3, 4, 7, 11],
    k = 5;
console.log(findKthPositive(arr, k));
