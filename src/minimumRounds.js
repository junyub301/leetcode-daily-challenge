/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
    let minRound = 0;
    let rounds = {};
    for (let i = 0; i < tasks.length; i++) {
        rounds[tasks[i]] = rounds[tasks[i]] + 1 || 1;
    }
    for (let val of Object.values(rounds)) {
        if (val < 2) return -1;
        if (Math.floor(val / 3) !== 0) {
            minRound += Math.ceil(val / 3);
        } else if (Math.floor(val / 2) !== 0) {
            minRound += Math.ceil(val / 2) !== 0;
        }
    }
    return minRound;
};

let tasks = [2, 3, 3];
console.log(minimumRounds(tasks));
