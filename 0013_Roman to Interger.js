/** ***************************
  [Description]
  Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

  Symbol       Value
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000
  For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

  Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

  I can be placed before V (5) and X (10) to make 4 and 9.
  X can be placed before L (50) and C (100) to make 40 and 90.
  C can be placed before D (500) and M (1000) to make 400 and 900.
  Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

  [Input]
  "III"
  [Output]
  3

  [Input]
  "IV"
  [Output]
  4

  [Input]
  "IX"
  [Output]
  9

  [Input]
  "LVIII"
  [Output]
  58

  [Input]
  "MCMXCIV"
  [Output]
  1994
*************************** */

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  const map = [
    { number: 1000, roman: 'M' },
    { number: 900, roman: 'CM' },
    { number: 500, roman: 'D' },
    { number: 400, roman: 'CD' },
    { number: 100, roman: 'C' },
    { number: 90, roman: 'XC' },
    { number: 50, roman: 'L' },
    { number: 40, roman: 'XL' },
    { number: 10, roman: 'X' },
    { number: 9, roman: 'IX' },
    { number: 5, roman: 'V' },
    { number: 4, roman: 'IV' },
    { number: 1, roman: 'I' },
  ];
  let sCopy = s;
  let result = 0;
  while (sCopy) {
    for (let i = 0; i < map.length; i++) {
      if (sCopy[0] === map[i].roman[0]) {
        if (map[i].roman.length === 1
          || (map[i].roman.length === 2 && sCopy[1] === map[i].roman[1])) {
          result += map[i].number;
          sCopy = sCopy.substring(map[i].roman.length, sCopy.length);
          break;
        }
      }
    }
  }
  return result;
}

function main() {
  console.log(romanToInt('MCMXCIV'));
}

main();
