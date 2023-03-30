/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
/* 
  Scramble String
 */
var isScramble = function (s1, s2) {
  return helper(s1, s2, {});

  function helper(subString1, subString2, dp) {
    if (
      dp[subString1 + subString2] != undefined ||
      dp[subString2 + subString1] != undefined
    )
      return dp[subString1 + subString2];
    else if (subString1 == subString2) return true;
    else if (subString1.length != subString2.length) return false;
    else if (subString1.length <= 1) return subString1 == subString2;

    for (let i = 1; i < subString1.length; i++) {
      if (
        (helper(subString1.slice(0, i), subString2.slice(0, i), dp) &&
          helper(subString1.slice(i), subString2.slice(i), dp)) ||
        (helper(
          subString1.slice(0, i),
          subString2.slice(subString1.length - i),
          dp
        ) &&
          helper(
            subString1.slice(i),
            subString2.slice(0, subString1.length - i),
            dp
          ))
      ) {
        dp[subString1 + subString2] = true;
        return true;
      }
    }
    dp[subString1 + subString2] = false;
    return false;
  }
};

const s1 = "abcde",
  s2 = "caebd";
console.log(isScramble(s1, s2));
