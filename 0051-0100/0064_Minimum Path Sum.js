/* ***********************************************************
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:
Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
************************************************************ */
/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
  const m = grid.length
  const n = grid[0].length

  if (!m || !n) return 0

  const resultMap = new Array(m)
  for (let i = 0; i < m; i++) {
    resultMap[i] = new Array(n).fill(0)
  }
  resultMap[m - 1][n - 1] = grid[m - 1][n - 1]

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      resultMap[i][j] = grid[i][j]
      if (i + 1 < m && j + 1 < n) {
        resultMap[i][j] += Math.min(resultMap[i + 1][j], resultMap[i][j + 1])
      } else if (i + 1 < m) {
        resultMap[i][j] += resultMap[i + 1][j]
      } else if (j + 1 < n) {
        resultMap[i][j] += resultMap[i][j + 1]
      }
    }
  }

  return resultMap[0][0]
}

function main() {
  console.log(
    minPathSum([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1]
    ])
  )
}

main()
