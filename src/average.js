/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    salary.sort((a, b) => a - b);
    salary.shift();
    salary.pop();
    return salary.reduce((pre, cur) => pre + cur, 0) / salary.length;
};

const salary = [4000, 3000, 1000, 2000];
console.log(average(salary));
