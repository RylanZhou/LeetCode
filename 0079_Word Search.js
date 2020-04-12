/* ***********************************************************
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
************************************************************ */
/**
 * @param {[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  if (!word || !board.length || !board[0].length) {
    return false
  }

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]

  const valid = (i, j) => {
    return (
      i >= 0 &&
      i < board.length &&
      j >= 0 &&
      j < board[0].length &&
      board[i][j] !== '*'
    )
  }
  const dfs = (row, col, charPos) => {
    if (charPos >= word.length) {
      return true
    }
    const temp = board[row][col]
    board[row][col] = '*'
    for (let i = 0; i < directions.length; i++) {
      const nextRow = row + directions[i][0]
      const nextCol = col + directions[i][1]
      if (
        valid(nextRow, nextCol) &&
        board[nextRow][nextCol] === word[charPos]
      ) {
        if (dfs(nextRow, nextCol, charPos + 1)) {
          return true
        }
      }
    }
    board[row][col] = temp

    return false
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(i, j, 1)) {
          return true
        }
      }
    }
  }

  return false
}

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ],
    'ABCB'
  )
)
