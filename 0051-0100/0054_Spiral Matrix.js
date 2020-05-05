/* ***********************************************************
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
************************************************************ */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
  if (!matrix.length) return []

  const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]
  const rows = matrix.length
  const cols = matrix[0].length
  const result = []

  const judge = (row, col) => {
    if (row >= rows || row < 0) return false
    if (col >= cols || col < 0) return false
    if (matrix[row][col] === '*') return false
    return true
  }

  let directionIndex = 0 // Current direction
  let row = 0
  let col = 0
  for (let i = 0; i < rows * cols; i++) {
    result.push(matrix[row][col])
    matrix[row][col] = '*'
    if (
      !judge(
        row + direction[directionIndex][0],
        col + direction[directionIndex][1]
      )
    ) {
      directionIndex = (directionIndex + 1) % 4
    }
    row += direction[directionIndex][0]
    col += direction[directionIndex][1]
  }

  return result
}

function main() {
  console.log(
    spiralOrder([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ])
  )
}

main()
