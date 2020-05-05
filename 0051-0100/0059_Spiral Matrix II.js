/* ***********************************************************
Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:
Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
************************************************************ */
/**
 * @param {number} n
 * @return {number[][]}
 */
function generateMatrix(n) {
  const matrix = []
  for (let i = 0; i < n; i++) {
    matrix.push([])
  }

  const judge = (row, col) => {
    if (row < 0 || row >= n) return false
    if (col < 0 || col >= n) return false
    if (matrix[row][col]) return false
    return true
  }

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]
  let directionIndex = 0

  let row = 0
  let col = 0
  for (let i = 1; i <= n * n; i++) {
    matrix[row][col] = i
    if (
      !judge(
        row + directions[directionIndex][0],
        col + directions[directionIndex][1]
      )
    ) {
      directionIndex = (directionIndex + 1) % 4
    }
    row += directions[directionIndex][0]
    col += directions[directionIndex][1]
  }

  return matrix
}

function main() {
  console.log(generateMatrix(0))
}

main()
