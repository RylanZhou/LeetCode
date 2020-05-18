/* ***********************************************************
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:
Input: "race a car"
Output: false
************************************************************ */
/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  // Extract only numbers and characters
  const input = s.match(/[0-9a-zA-Z]/g)
  if (!input) {
    return true
  }

  const len = input.length
  for (let i = 0; i <= len >> 1; i++) {
    if (input[i].toLowerCase() !== input[len - i - 1].toLowerCase()) {
      return false
    }
  }

  return true
}

console.log(isPalindrome('race a car'))
