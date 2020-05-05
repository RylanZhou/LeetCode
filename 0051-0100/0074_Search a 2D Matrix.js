/* ***********************************************************
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.

Example 1:
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true

Example 2:
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
************************************************************ */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  // Which row
  let rowPos = 0

  for (let i = 0, lenRows = matrix.length; i < lenRows; i++) {
    if (matrix[i][0] > target) {
      rowPos = i - 1
      break
    } else if (matrix[i][0] === target) {
      return true
    }
  }

  if (rowPos === -1) {
    return false
  }

  if (target > matrix[rowPos][matrix[0].length - 1]) {
    return false
  }

  // Binary Search
  let front = 0
  let rear = matrix[0].length
  let mid = Math.floor(rear / 2)

  while (front < rear) {
    if (matrix[rowPos][mid] < target) {
      front = mid + 1
    } else if (matrix[rowPos][mid] > target) {
      rear = mid
    } else {
      return true
    }
    mid = Math.floor((front + rear) / 2)
  }

  return false
}

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrixII(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false

  const rows = matrix.length
  const cols = matrix[0].length

  // Binary Search
  let front = 0
  let rear = rows * cols - 1

  while (front < rear) {
    let mid = (front + rear) >> 1
    const rowPos = Math.floor(mid / cols)
    const colPos = mid % cols

    if (matrix[rowPos][colPos] < target) {
      front = mid + 1
    } else if (matrix[rowPos][colPos] > target) {
      rear = mid - 1
    } else {
      return true
    }
  }

  return matrix[Math.floor(front / cols)][front % cols] === target
}

console.log(searchMatrixII([[1]], 1))
