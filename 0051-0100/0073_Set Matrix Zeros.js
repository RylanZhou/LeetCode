/* ***********************************************************
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:
Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]

Example 2:
Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]

Follow up:
A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
************************************************************ */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
  // First, see whether the first row and the first col should be zero
  let firstRowToBeZero = matrix.some((row) => !row[0])
  let firstColToBeZero = matrix[0].some((value) => !value)

  // Then we use the first row and the first col to store the state of each column and row
  for (let i = 1, lenRows = matrix.length; i < lenRows; i++) {
    for (let j = 1, lenCols = matrix[0].length; j < lenCols; j++) {
      if (!matrix[i][j]) {
        matrix[0][j] = 0
        matrix[i][0] = 0
      }
    }
  }

  // For all rows and columns that the state of which is 0, set the entire row or column to 0
  for (let i = 1, lenRows = matrix.length; i < lenRows; i++) {
    for (let j = 1, lenCols = matrix[0].length; j < lenCols; j++) {
      if (!matrix[0][j] || !matrix[i][0]) {
        matrix[i][j] = 0
      }
    }
  }

  // To see if the first row and col needs to be set to zero
  if (firstColToBeZero) {
    for (let i = 0, lenCols = matrix[0].length; i < lenCols; i++) {
      matrix[0][i] = 0
    }
  }

  if (firstRowToBeZero) {
    for (let i = 0, lenRows = matrix.length; i < lenRows; i++) {
      matrix[i][0] = 0
    }
  }

  return matrix
}

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
  ])
)
