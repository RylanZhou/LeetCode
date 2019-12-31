/* ***********************************************************
Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

Note:
s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like ? or *.

Example 1:
Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Example 2:
Input:
s = "aa"
p = "*"
Output: true
Explanation: '*' matches any sequence.

Example 3:
Input:
s = "cb"
p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.

Example 4:
Input:
s = "adceb"
p = "*a*b"
Output: true
Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".

Example 5:
Input:
s = "acdcb"
p = "a*c?b"
Output: false
************************************************************ */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
  let dp = []
  for (let i = 0; i <= s.length; i++) {
    dp.push(new Array(p.length + 1))
  }

  // dp[i][j] means whether s[1~i] matchs p[1~j]
  // dp[0][i] means s = ''. To make it true, p[1~i] must only contains '*'. Otherwise it's false.
  for (let i = 1; i < p.length + 1; i++) {
    if (p[i - 1] !== '*') {
      break
    }
    dp[0][i] = true
  }
  // dp[i][0] means p = ''. Only dp[0][0] is true.
  dp[0][0] = true
  for (let i = 1; i < s.length + 1; i++) {
    dp[i][0] = false
  }

  for (let i = 1; i < s.length + 1; i++) {
    for (let j = 1; j < p.length + 1; j++) {
      if (p[j - 1] === '*') {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1]
      } else {
        if (p[j - 1] !== '?') {
          // p[j - 1] is a letter, then we have to check whether the result before it is true, and meanwhile, we have to check whether two letters match.
          dp[i][j] = dp[i - 1][j - 1] && s[i - 1] === p[j - 1]
        } else {
          // p[j - 1] is ?, then we only have to check whether the result before it is true
          dp[i][j] = dp[i - 1][j - 1]
        }
      }
    }
  }

  // Prevent undefined value in javascript
  return dp[s.length][p.length] ? true : false
}

function main() {
  console.log(isMatch('cba', '*'))
}

main()
