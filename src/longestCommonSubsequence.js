/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

/* 
    문제는 길이만 구하는것이지만 값이 뭔지도 확인    

    상향식 접근방식으로 길이 
    LCS(i,j) = {
        Xi === Yj => LCS(i-1,j-1) +1
        Xi !== Yj => MAX(LCS(i-1,j),LCS(i,j-1))
    }
    
    하향식 접근 방식으로 LCS가 뭔지 출력
    checkArry[i][j] 값이 1 => 왼쪽 대각석
    checkArry[i][j] 값이 2 => 위쪽
    checkArry[i][j] 값이 3 => 왼쪽

*/

var longestCommonSubsequence = function (text1, text2) {
    let LCS = Array.from({ length: text1.length + 1 }, () =>
        Array(text2.length + 1).fill(0)
    );

    let checkArry = Array.from({ length: text1.length + 1 }, () =>
        Array(text2.length + 1).fill(0)
    );

    for (let i = 1; i < LCS.length; i++) {
        for (let j = 1; j < LCS[0].length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                LCS[i][j] = LCS[i - 1][j - 1] + 1;
                checkArry[i][j] = 1;
            } else {
                LCS[i][j] = Math.max(LCS[i - 1][j], LCS[i][j - 1]);
                checkArry[i][j] = LCS[i - 1][j] > LCS[i][j - 1] ? 2 : 3;
            }
        }
    }

    let get_lcs = (i, j, matrix, text) => {
        if (i === 0 || j === 0) return "";
        if (matrix[i][j] === 1) {
            return get_lcs(i - 1, j - 1, matrix, text) + text[i - 1];
        } else if (matrix[i][j] === 2) return get_lcs(i - 1, j, matrix, text);
        else if (matrix[i][j] === 3) return get_lcs(i, j - 1, matrix, text);
    };
    console.log(
        "length: ",
        LCS[LCS.length - 1][LCS[0].length - 1],
        "value: ",
        get_lcs(text1.length, text2.length, checkArry, text1)
    );
    return LCS[LCS.length - 1][LCS[0].length - 1];
};

longestCommonSubsequence("oxcpqrsvwf", "shmtulqrypy");
