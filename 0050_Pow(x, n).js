/* ***********************************************************
Implement pow(x, n), which calculates x raised to the power n (x^n).

Example 1:
Input: 2.00000, 10
Output: 1024.00000

Example 2:
Input: 2.10000, 3
Output: 9.26100

Example 3:
Input: 2.00000, -2
Output: 0.25000
Explanation: 2^-2 = 1/2^2 = 1/4 = 0.25

Note:
-100.0 < x < 100.0
n is a 32-bit signed integer, within the range [−231, 231 − 1]
************************************************************ */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
  const quickPow = (a, b) => {
    let result = 1
    while (b) {
      if (b & 1) {
        result
      }
    }
    if (!b) {
      return 1
    }
    if (b & 1) {
      return a * quickPow(a, b - 1)
    }
    const temp = quickPow(a, b >> 1)
    return temp * temp
  }

  const exp = n >= 0 ? n : -n
  const base = x >= 0 ? x : -x
  let result = quickPow(base, exp)
  if (x < 0) {
    return exp & 1 ? -result : result
  }
  return n < 0 ? 1 / result : result
}

function main() {
  console.log(myPow(2, -2))
}

main()
