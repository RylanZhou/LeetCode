/* ***********************************************************
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

Note: m and n will be at most 100.

Example 1:
Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
************************************************************ */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length

  if (!m || !n) return 0

  const resultMap = new Array(m)
  for (let i = 0; i < m; i++) {
    resultMap[i] = new Array(n).fill(0)
  }
  resultMap[m - 1][n - 1] = 1

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (obstacleGrid[i][j]) {
        resultMap[i][j] = 0
      } else {
        if (i + 1 < m) {
          resultMap[i][j] += resultMap[i + 1][j]
        }
        if (j + 1 < n) {
          resultMap[i][j] += resultMap[i][j + 1]
        }
      }
    }
  }

  return resultMap[0][0]
}

function main() {
  console.log(
    uniquePathsWithObstacles([
      [0, 1, 0],
      [0, 1, 0]
    ])
  )
}

main()
