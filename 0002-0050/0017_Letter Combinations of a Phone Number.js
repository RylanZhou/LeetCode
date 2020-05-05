/** ***************************
  [Description]
  Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

  A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
   1   2   3
  NaN abc def
   4   5   6
  ghi jkl mno
   7   8   9
 pqrs tuv wxyz
*************************** */
/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  if (digits === '') {
    return [];
  }
  if (digits.length === 1) {
    return map[digits].split('');
  }

  // Firstly, calculate how many strings will be generated.
  let totalAmount = 1;
  for (let i = 0; i < digits.length; i++) {
    totalAmount *= map[digits[i]].length;
  }
  // Make a copy to calculate each period.
  let totalAmountCopy = totalAmount;
  // Init array with empty strings.
  const result = new Array(totalAmount);
  result.fill('');

  // In each main loop, append a character to every string.
  // Thus the main loop has to run digits.length times.
  for (let i = 0; i < digits.length; i++) {
    // period is the times that the same character should be appended successively.
    // Take 2 'abc' as an example, if the given digits are '234', then characters in 'abc' should appear 9 times in a roll, and characters in 'def' should appear 3 times in a roll.
    const period = totalAmountCopy / map[digits[i]].length;
    totalAmountCopy /= map[digits[i]].length;

    // The position of character in the map strings that is going to append to result[j]
    let position = -1;
    // Each time, there are totalAmount strings in the array to be appended.
    // Thus the sub loop has to run totalAmount times.
    for (let j = 0; j < totalAmount; j++) {
      // If the same character has been added period times, result[j + 1] will be appended the next character.
      // For example, if the given digits are '23', then the first character(the period is 3) of each result string should appear to be 'aaabbbccc'.
      if (j % period === 0) {
        position++;
        // Make a cycle.
        // For example, the second character(the period is 1) of each result string should appear to be 'defdefdef'.
        if (position === map[digits[i]].length) {
          position = 0;
        }
      }
      // Append
      result[j] += map[digits[i]][position];
    }
  }

  return result;
}

function main() {
  console.log(letterCombinations(''));
}

main();
