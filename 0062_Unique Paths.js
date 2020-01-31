/* ***********************************************************
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Note: m and n will be at most 100.

Example 1:
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right

Example 2:
Input: m = 7, n = 3
Output: 28
************************************************************ */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
  if (!m || !n) return 0

  let resultMap = []
  for (let i = 0; i < m; i++) {
    resultMap.push(new Array(n).fill(0))
  }
  resultMap[m - 1][n - 1] = 1

  // const dfs = (currentM, currentN) => {
  //   if (currentM >= m || currentN >= n) return 0
  //   if (resultMap[currentM][currentN]) {
  //     return resultMap[currentM][currentN]
  //   }
  //   resultMap[currentM][currentN] +=
  //     dfs(currentM + 1, currentN) + dfs(currentM, currentN + 1)
  //   return resultMap[currentM][currentN]
  // }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i + 1 < m) {
        resultMap[i][j] += resultMap[i + 1][j]
      }
      if (j + 1 < n) {
        resultMap[i][j] += resultMap[i][j + 1]
      }
    }
  }

  // return dfs(0, 0)
  return resultMap[0][0]
}

function main() {
  console.log(uniquePaths(7, 3))
}

main()
