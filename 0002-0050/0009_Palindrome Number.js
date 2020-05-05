/** ***************************
  [Description]
  Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

  [Input]
  121
  [Output]
  true

  [Input]
  -121
  [Output]
  false
  [Explanation]
  From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

  [Input]
  10
  [Output]
  false
*************************** */

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  const str = `${x}`;
  return str === str.split('').reverse().join('');
}

function main() {
  console.log(isPalindrome(121));
}

main();
