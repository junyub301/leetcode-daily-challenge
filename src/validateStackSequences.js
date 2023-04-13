/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

/* 
    Validate Stack Sequences
    1. pushed를 루프하면서 stack에 삽입
    2. stack의 마지막 값과 popped[j] 번째 값이 같을 경우 루프 돌면서 stack의 마지막 값 추출
    3. 루프를 다 돌고 stack의 길이가 0이면 true, 아니면 false 리턴
    
*/

var validateStackSequences = function (pushed, popped) {
    let stack = [];
    let j = 0;
    for (let push of pushed) {
        stack.push(push);
        while (stack.length && stack[stack.length - 1] === popped[j]) {
            stack.pop();
            j++;
        }
    }
    return stack.length === 0;
};
const pushed = [1, 2, 3, 4, 5],
    popped = [4, 3, 5, 1, 2];
console.log(validateStackSequences(pushed, popped));
