/* ***********************************************************
Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero.

Example 1:
Input: dividend = 10, divisor = 3
Output: 3

Example 2:
Input: dividend = 7, divisor = -3
Output: -2

Note:
Both dividend and divisor will be 32-bit signed integers.
The divisor will never be 0.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 2^31 − 1 when the division result overflows.
************************************************************ */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
function divide(dividend, divisor) {
  if (!dividend) return dividend
  let result = 0
  const sign = dividend > 0 === divisor > 0
  if (divisor === 1) {
    result = dividend
  } else if (divisor === -1) {
    result = -dividend
  } else {
    let dvd = Math.abs(dividend)
    let dvs = Math.abs(divisor)

    while (dvd >= dvs) {
      let temp = dvs
      let shift = 0
      while (temp <= dvd >> 1) {
        temp <<= 1
        shift++
      }
      result += 1 << shift
      dvd -= temp
    }

    result = sign ? result : ~result + 1 // Equals to result *= -1
  }

  const MAX_VALUE = 2 ** 31 - 1
  const MIN_VALUE = -MAX_VALUE - 1
  if (result < MIN_VALUE || result > MAX_VALUE) {
    return MAX_VALUE
  }
  return result
}

function divideII(dividend, divisor) {
  if (!dividend) return dividend
  let count = 0
  if (divisor === 1) {
    count = dividend
  } else {
    let absDividend = Math.abs(dividend)
    let absDivisor = Math.abs(divisor)

    while (absDividend >= absDivisor) {
      count++
      absDividend -= absDivisor
    }
  }
  const MAX_VALUE = 2 ** 31 - 1
  const MIN_VALUE = -MAX_VALUE - 1
  if (count > MAX_VALUE || count < MIN_VALUE) {
    return MAX_VALUE
  }
  if (
    divisor !== 1 &&
    dividend > 0 !== divisor > 0
    // Line 47 could best replace line 49
    // ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0))
  ) {
    return -count
  }
  return count
}

function main() {
  console.log(divide(-2147483648, -3))
}

main()
