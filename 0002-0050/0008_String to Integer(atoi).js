/** ***************************
  [Description]
  The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

  The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

  If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

  If no valid conversion could be performed, a zero value is returned.

  Note:
    1. Only the space character ' ' is considered as whitespace character.
    2. Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.

  [Input]
  "42"
  [Output]
  42

  [Input]
  "      -42"
  [Output]
  -42

  [Input]
  "4193 with words"
  [Output]
  4193

  [Input]
  "words and 987"
  [Output]
  0

  [Input]
  "-91283472332"
  [Output]
  -2147483648
*************************** */

/**
 * @param {string} str
 * @return {number}
 */
function myAtoi(str) {
  const match = str.match(/^\s*[-+]?\d+/);
  if (match === null) {
    return 0;
  }
  const result = parseInt(match[0], 10);
  const INT_MAX = (2 ** 31) - 1;
  const INT_MIN = (-2) ** 31;
  if (result < INT_MIN) {
    return INT_MIN;
  }
  if (result > INT_MAX) {
    return INT_MAX;
  }
  return result;
}

function main() {
  console.log(myAtoi('+1'));
}

main();
