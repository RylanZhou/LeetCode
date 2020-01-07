/* ***********************************************************
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return the number of distinct solutions to the n-queens puzzle.

Example:
Input: 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
************************************************************ */

/**
 * @param {number} n
 * @return {number}
 */
function totalNQueens(n) {
  const board = []
  for (let i = 0; i < n; i++) {
    board.push(new Array(n).fill('.'))
  }

  let result = 0

  const judge = (row, col) => {
    let left = col - 1
    let right = col + 1
    for (let i = row - 1; i >= 0; i--) {
      if (board[i][col] === 'Q') return false
      if (left >= 0 && board[i][left--] === 'Q') return false
      if (right < n && board[i][right++] === 'Q') return false
    }
    return true
  }

  const dfs = row => {
    if (row === n) {
      result++
      return
    }
    for (let i = 0; i < n; i++) {
      if (row !== 0 && !judge(row, i)) {
        continue
      }
      board[row][i] = 'Q'
      dfs(row + 1, 0)
      board[row][i] = '.'
    }
  }

  dfs(0, 0)
  return result
}

function main() {
  console.log(totalNQueens(4))
}

main()
