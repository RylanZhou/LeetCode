/* ***********************************************************
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:
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
Output: true

Example 2:
Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
************************************************************ */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  /*
  Strategy: There are 9 boxes. We pick one number in each box to do the validations for the row, the column and the box that number is in. i.e., 
    In box 0, we pick [0][0] for row 0, column 0; 
    In box 1, we pick [1][3] for row 1, column 3;
    ...
    In box 3, we pick [3][1] for row 3, column 1;
    ...
  */
  const validate = (boxIndex, boxMap, rowMap, columnMap) => {
    boxMap.fill(false)
    rowMap.fill(false)
    columnMap.fill(false)

    const boxRow = Math.floor(boxIndex / 3)
    const boxColumn = boxIndex % 3

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Validate Box
        if (board[boxRow * 3 + i][boxColumn * 3 + j] !== '.') {
          if (boxMap[board[boxRow * 3 + i][boxColumn * 3 + j]]) {
            return false
          }
          boxMap[board[boxRow * 3 + i][boxColumn * 3 + j]] = true
        }

        const index = i * 3 + j
        // Validate Row, row index equals boxIndex
        if (board[boxIndex][index] !== '.') {
          if (rowMap[board[boxIndex][index]]) {
            return false
          }
          rowMap[board[boxIndex][index]] = true
        }

        // Validate Column, column index equals boxRow + 3 * boxColumn
        if (board[index][boxRow + 3 * boxColumn] !== '.') {
          if (columnMap[board[index][boxRow + 3 * boxColumn]]) {
            return false
          }
          columnMap[board[index][boxRow + 3 * boxColumn]] = true
        }
      }
    }

    return true
  }

  // Init map
  const boxMap = new Array(10)
  const rowMap = new Array(10)
  const columnMap = new Array(10)
  // Iterate 9 boxes
  for (let box = 0; box < 9; box++) {
    if (!validate(box, boxMap, rowMap, columnMap)) {
      return false
    }
  }

  return true
}

function main() {
  const board = [
    ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
    ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
    ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
    ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.']
  ]
  console.log(isValidSudoku(board))
}

main()
