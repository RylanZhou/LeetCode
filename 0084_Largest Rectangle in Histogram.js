/* ***********************************************************
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

      *
    * *
    * *
    * *   *
*   * * * *
* * * * * *

Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3]

      *
    x x
    x x
    x x   *
*   x x * *
* * x x * *

The largest rectangle is shown in the shaded area, which has area = 10 unit.

Example:
Input: [2,1,5,6,2,3]
Output: 10
************************************************************ */
/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
  if (!heights || !heights.length) {
    return 0
  }

  // 1. For each bar i, find the width of the rectangle that contains the whole bar. The width is calculated by r - l, where r is when h[r] < h[i] and l is when h[l] < h[i].
  // 2. Find the rectangle with max area from the rectangles above.

  // To do 1, two arrays recording the left most and the right most of rectangle i are needed.
  const leftBoarder = new Array(heights.length)
  const rightBoarder = new Array(heights.length)
  const len = heights.length
  // Init these two arrays.
  // leftBoarder[0] means the left boarder of the rectangle that contains the first bar. It should be -1.
  // rightBoarder[heights.length - 1] means the right boarder of the rectangle that contains the last bar. It should be heights.length.
  leftBoarder[0] = -1
  rightBoarder[len - 1] = len

  // Fill the arrays
  for (let i = 1; i < len; i++) {
    let left = i - 1 // From left to right
    let right = len - i // From right to left
    while (left >= 0 && heights[left] >= heights[i]) {
      // left--
      left = leftBoarder[left] // Optimization, use the result from the last loop
    }
    while (right < len && heights[right] >= heights[len - i - 1]) {
      // right ++
      right = rightBoarder[right]
    }
    leftBoarder[i] = left
    rightBoarder[len - i - 1] = right
  }

  // Find the maximum
  return Math.max(
    ...heights.map(
      (each, index) => each * (rightBoarder[index] - leftBoarder[index] - 1)
    )
  )
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
