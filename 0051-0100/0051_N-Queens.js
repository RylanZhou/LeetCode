/* ***********************************************************
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

Example:
Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
************************************************************ */
/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {
  const board = []
  for (let i = 0; i < n; i++) {
    board.push(new Array(n).fill('.'))
  }

  const result = []

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
      const currentResult = []
      for (let i = 0; i < n; i++) {
        currentResult.push(board[i].join(''))
      }
      result.push(currentResult)
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
  console.log(solveNQueens(4))
}

main()
