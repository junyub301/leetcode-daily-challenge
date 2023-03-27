/**
 * @param {number[][]} grid
 * @return {number}
 */

/* 
    Minimum Path Sum
    1. dp를 그리드의 너비 만큼의 배열로 선언.
    2. dp의 처음 값을 grid[0][0]으로 채운다.
    3. 0에서 length-1까지 루프
    4. 0에서 width-1가지 루프
    5. i가 0이 아닐 경우 up에 dp[j]의 값을 설정
    6. j가 0이 아닐 경우 left에 dp[j-1]의 값을 설정
    7. dp[j]에 grid[i][j] + Math.min(up,left)값을 설정
    8. 루프가 끝나면 dp[width-1]의 값을 리턴
    ex) grid = [[1,3,1],
                [1,5,1],
                [4,2,1]]
        i = 0 => dp = [1,4,5]
        i = 1 => dp = [2,6,6]
        i = 2 => dp = [6,8,7]
        return dp[width-1] = 7
 */
var minPathSum = function (grid) {
  let width = grid[0].length,
    length = grid.length;
  let dp = Array(width);

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < width; j++) {
      if (i === 0 && j === 0) dp[j] = grid[i][j];
      else {
        let up = i === 0 ? Infinity : dp[j];
        let left = j === 0 ? Infinity : dp[j - 1];
        dp[j] = grid[i][j] + Math.min(up, left);
      }
    }
  }
  return dp[width - 1];
};

const grid = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(minPathSum(grid));
