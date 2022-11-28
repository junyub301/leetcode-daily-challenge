/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
    const winners = new Set();
    const losers = new Set();
    const moreLosers = new Set();
    for (let i = 0; i < matches.length; i++) {
        let [winner, loser] = matches[i];
        if (!losers.has(winner) && !moreLosers.has(winner)) {
            winners.add(winner);
        }
        if (winners.has(loser)) {
            winners.delete(loser);
            losers.add(loser);
        } else if (losers.has(loser)) {
            losers.delete(loser);
            moreLosers.add(loser);
        } else if (moreLosers.has(loser)) {
            continue;
        } else {
            losers.add(loser);
        }
    }

    return [
        [...winners].sort((a, b) => a - b),
        [...losers].sort((a, b) => a - b),
    ];
};
