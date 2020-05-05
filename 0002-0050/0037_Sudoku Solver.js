/* ***********************************************************
Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
Empty cells are indicated by the character '.'.

Note:
The given board contain only digits 1-9 and the character '.'.
You may assume that the given Sudoku puzzle will have a single unique solution.
The given board size is always 9x9.

Example:
Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output:
[
  ["5","3","4","6","7","8","9","1","2"],
  ["6","7","2","1","9","5","3","4","8"],
  ["1","9","8","3","4","2","5","6","7"],
  ["8","5","9","7","6","1","4","2","3"],
  ["4","2","6","8","5","3","7","9","1"],
  ["7","1","3","9","2","4","8","5","6"],
  ["9","6","1","5","3","7","2","8","4"],
  ["2","8","7","4","1","9","6","3","5"],
  ["3","4","5","2","8","6","1","7","9"]
]
************************************************************ */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solveSudoku(board) {
  const isValid = (row, col, val) => {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] !== '.' && board[row][i] === val) {
        return false
      }
      if (board[i][col] !== '.' && board[i][col] === val) {
        return false
      }
      // Which box is it in?
      // The row of the box should begin at Math.floor(row / 3) * 3, the column should begin at Math.floor(col / 3) * 3. The relationship between i and index should be [Math.floor(row / 3) * 3 + Math.floor(i / 3)] and [Math.floor(col / 3) * 3 + i % 3]
      let boxRow = Math.floor(row / 3) * 3 + Math.floor(i / 3)
      let boxCol = Math.floor(col / 3) * 3 + (i % 3)
      if (board[boxRow][boxCol] !== '.' && board[boxRow][boxCol] === val) {
        return false
      }
    }
    return true
  }

  const solveProcess = board => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === '.') {
          for (let k = 1; k < 10; k++) {
            if (isValid(i, j, `${k}`)) {
              board[i][j] = `${k}`

              if (solveProcess(board)) {
                return true
              } else {
                board[i][j] = '.'
              }
            }
          }
          // Nothing could fill in this blank
          return false
        }
      }
    }
    return true
  }

  solveProcess(board)
}

function main() {
  const board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
  ]
  const result = [
    ['5', '3', '1', '2', '7', '6', '4', '9', '8'],
    ['6', '2', '3', '1', '9', '5', '8', '4', '7'],
    ['1', '9', '8', '3', '4', '7', '5', '6', '2'],
    ['8', '1', '2', '7', '6', '4', '9', '5', '3'],
    ['4', '7', '9', '8', '5', '3', '6', '2', '1'],
    ['7', '4', '5', '9', '2', '8', '3', '1', '6'],
    ['9', '6', '7', '5', '3', '1', '2', '8', '4'],
    ['2', '8', '6', '4', '1', '9', '7', '3', '5'],
    ['3', '5', '4', '6', '8', '2', '1', '7', '9']
  ]
  solveSudoku(board)
  console.log(board)
}

main()
