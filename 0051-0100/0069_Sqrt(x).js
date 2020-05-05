/* ***********************************************************
Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:
Input: 4
Output: 2

Example 2:
Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.
************************************************************ */
/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
  if (x < 2) {
    return x
  }

  let mid = Math.floor(x / 2)
  let front = 0
  let rear = x
  while (front !== mid) {
    if (mid ** 2 > x) {
      rear = mid
    } else if (mid ** 2 < x) {
      front = mid
    } else {
      return mid
    }

    mid = Math.floor((front + rear) / 2)
  }

  return mid
}

console.log(mySqrt(9))
