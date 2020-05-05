/* ***********************************************************
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:
Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],
rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]

Example 2:
Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 
rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
************************************************************ */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
  const n = matrix.length
  // Divide matrix into four square pieces
  const center = (n - 1) / 2

  // For each i and j, we swap four times with the corresponding number in other pieces. Therefore we only have to iterate i and j in the first piece.
  for (let i = 0; i < center; i++) {
    for (let j = 0; j < center; j++) {
      const deltaX = center - i
      const deltaY = center - j
      const temp = matrix[i][j]
      matrix[i][j] = matrix[center + deltaY][center - deltaX]
      matrix[center + deltaY][center - deltaX] =
        matrix[center + deltaX][center + deltaY]
      matrix[center + deltaX][center + deltaY] =
        matrix[center - deltaY][center + deltaX]
      matrix[center - deltaY][center + deltaX] = temp
    }
  }
  // Points that are aligned with center
  if (n % 2) {
    for (let i = 0; i < center; i++) {
      const temp = matrix[i][center]
      matrix[i][center] = matrix[center][i]
      matrix[center][i] = matrix[n - 1 - i][center]
      matrix[n - 1 - i][center] = matrix[center][n - 1 - i]
      matrix[center][n - 1 - i] = temp
    }
  }
}

function main() {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  rotate(matrix)
  console.log(matrix)
}

main()
