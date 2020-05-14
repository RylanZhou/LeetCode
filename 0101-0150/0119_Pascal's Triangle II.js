/* ***********************************************************
Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.

Example:
Input: 3
Output: [1,3,3,1]
Follow up:

Could you optimize your algorithm to use only O(k) extra space?
************************************************************ */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(rowIndex) {
  const result = [1]
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j >= 1; j--) {
      if (result[j] === undefined) {
        result[j] = 0
      }
      result[j] += result[j - 1]
    }
  }
  return result
}

console.log(getRow(0))
