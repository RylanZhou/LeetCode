/* ***********************************************************
Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Note:

Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.
************************************************************ */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle) {
  /*
    [2],
    [3,4],
    [6,5,7],
    [4,1,8,3]
  */
  const n = triangle.length
  const sumArray = triangle[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      sumArray[j] = triangle[i][j] + Math.min(sumArray[j], sumArray[j + 1])
    }
  }

  return Math.min(sumArray[0])
}

console.log(minimumTotal([[2], [3, 2]]))
