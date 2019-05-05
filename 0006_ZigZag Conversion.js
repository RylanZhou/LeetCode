/** ***************************
  [Description]
  The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
  P   A   H   N
  A P L S I I G
  Y   I   R

  [Input]
  s = "PAYPALISHIRING", numRows = 4

  [Output]
  "PINALSIGYAHRPI"

  [Explanation]
  P     I    N
  A   L S  I G
  Y A   H R
  P     I

  [My Method]
  P A Y P A L I S H I R I N G
  0           0           0
    1       1   1       1   1
      2   2       2   2
        3           3

  0 -> P     I     N
  1 -> A   L S   I G
  2 -> Y A   H R
  3- > P     I
*************************** */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
  if (numRows === 1 || s.length < 2 || numRows >= s.length) {
    return s;
  }
  let result = '';
  const lengthS = s.length;
  const step = 2 * (numRows - 1);
  const times = Math.ceil(lengthS / numRows);
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < times; j++) {
      const position1 = i + j * step;
      const position2 = (j + 1) * step - i;
      if (i !== numRows - 1 && position1 < lengthS) {
        result += s[position1];
      }
      if (i !== 0 && position2 < lengthS) {
        result += s[position2];
      }
    }
  }
  return result;
}

function main() {
  console.log(convert('ABC', 2));
}

main();
