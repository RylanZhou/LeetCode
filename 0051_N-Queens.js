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
  const board = new Array(n)
  for (let i = 0; i < n; i++) {
    board.push(new Array(n).fill('.'))
  }

  const dfs = (row, col) => {}
}

function main() {
  console.log(solveNQueens(4))
}

main()
