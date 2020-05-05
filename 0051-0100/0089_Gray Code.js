/* ***********************************************************
The gray code is a binary numeral system where two successive values differ in only one bit.

Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

Example:
Input: 2
Output: [0,1,3,2]
Explanation:
00 - 0
01 - 1
11 - 3
10 - 2
************************************************************ */
/**
 * @param {number} n
 * @return {number[]}
 */
function grayCode(n) {
  // A regular pattern:
  // n: 0 -> 0
  // n: 1 -> 0 | 1
  // n: 2 -> 00, 01 | 11, 10
  // n: 3 -> 000, 001, 011, 010 | 110, 111, 101, 100
  // After putting a line in the middle, we can see that the left half can be generated from the sequence in n - 1 and the right half is the symmetry to the left half, with only changing the highest position from 0 to 1.

  const result = [0]

  for (let i = 1; i <= n; i++) {
    const base = 1 << (i - 1)
    for (let j = result.length - 1; j >= 0; j--) {
      result.push(base + result[j])
    }
  }

  return result
}

console.log(grayCode(2))
