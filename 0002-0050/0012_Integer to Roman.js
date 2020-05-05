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
  Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

  [Input]
  3
  [Output]
  "III"

  [Input]
  4
  [Output]
  "IV"

  [Input]
  9
  [Output]
  "IX"

  [Input]
  58
  [Output]
  "LVIII"

  [Input]
  1994
  [Output]
  "MCMXCIV"
*************************** */

/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
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
  let result = '';
  let numCopy = num;
  while (numCopy > 0) {
    for (let i = 0; i < map.length; i++) {
      if (map[i].number <= numCopy) {
        result += map[i].roman;
        numCopy -= map[i].number;
        break;
      }
    }
  }
  return result;
}

function main() {
  console.log(intToRoman(4));
}

main();
