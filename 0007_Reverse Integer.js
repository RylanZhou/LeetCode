/** ***************************
  [Description]
  Given a 32-bit signed integer, reverse digits of an integer.

  [Input]
  -123

  [Output]
  -321
*************************** */

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  const xCopy = x < 0 ? -x : x;
  let str = `${xCopy}`;
  str = str.split('').reverse().join('');
  const result = parseInt(str, 10);
  if ((x > 0 && result > (2 ** 31) - 1) || (x < 0 && -result < -(2 ** 31))) {
    return 0;
  }
  return x < 0 ? -result : result;
}

function main() {
  console.log(reverse(-123));
}

main();
