/* ***********************************************************
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Example 1:
Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"

Example 2:
Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"
************************************************************ */

/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
  const length = s.length
  if (length === 0 || length === 1) return 0

  // Dynamic Programming
  const dp = new Array(length).fill(0)
  for (let i = 1; i < s.length; i++) {
    // Only when s[i] = ')' will it trigger updates in dp array
    if (s[i] === ')') {
      // ()()
      if (s[i - 1] === '(') {
        dp[i] = i === 1 ? 2 : dp[i - 2] + 2
      } else if (
        // (())
        // The index of the possible first '(' in a valid sequence
        i - dp[i - 1] - 1 >= 0 &&
        // It is indeed a '('
        s[i - dp[i - 1] - 1] === '('
      ) {
        // The content within current ')' and first '(' is valid
        if (dp[i - 1]) {
          // New length = Valid length within + current ')' + first '(' + valid content length before first '('
          dp[i] =
            dp[i - 1] +
            2 +
            // if i - dp[i - 1] - 1 is at 0 position, there is nothing before it
            (i - dp[i - 1] - 1 ? dp[i - dp[i - 1] - 2] : 0)
        }
      }
    }
  }

  return Math.max(...dp)
}

function main() {
  console.log(longestValidParentheses('()(()()())'))
}

main()
