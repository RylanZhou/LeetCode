/* ***********************************************************
Given a string S and a string T, count the number of distinct subsequences of S which equals T.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

It's guaranteed the answer fits on a 32-bit signed integer.

Example 1:

Input: S = "rabbbit", T = "rabbit"
Output: 3
Explanation:
As shown below, there are 3 ways you can generate "rabbit" from S.
(The caret symbol ^ means the chosen letters)

rabbbit
^^^^ ^^
rabbbit
^^ ^^^^
rabbbit
^^^ ^^^
Example 2:

Input: S = "babgbag", T = "bag"
Output: 5
Explanation:
As shown below, there are 5 ways you can generate "bag" from S.
(The caret symbol ^ means the chosen letters)

babgbag
^^ ^
babgbag
^^    ^
babgbag
^    ^^
babgbag
  ^  ^^
babgbag
    ^^^
************************************************************ */
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function numDistinct(s, t) {
  const lenS = s.length
  const lenT = t.length
  if (!lenS || !lenT) {
    return 0
  }

  // dp[i][j] means there are dp[i][j] sequences of T[0:i] in S[0:j]
  const dp = []
  // When T = '', dp[0][j] = 1
  dp.push(new Array(lenS + 1).fill(1))

  for (let i = 1; i <= lenT; i++) {
    dp.push(new Array(lenS + 1))
    // When S = '', dp[i][0] = 0
    dp[i][0] = 0
  }

  /* ***********
  Explanation:
  1. When T = 'a', S = 'cabcabc', we know that dp[1] = [0, 1, 1, 1, 2, 2, 2]
  2. When T = 'ab', dp[1] is the same.
  3. dp[2] should be generated from dp[1]. If we get a 'b' matched at T[1] and S[j], we should check whether there are any matched 'a' before this 'b'. Therefore, we check dp[0][j - 1]. 
  4. If dp[0][j - 1] is 2, it means we also got 2 'ab'. So dp[1][j] is 2 as well.
  5. If there are 2 matched 'b' and dp[0][j - 1] is 2, it means we got 4 'ab' (2 'a' and 2 'b').
  6. In conclusion: 
    1) if T[i] === S[j], dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1]
    2) if T[i] !== S[j], dp[i][j] = dp[i][j - 1]
  *********** */
  for (let i = 1; i <= lenT; i++) {
    for (let j = 1; j <= lenS; j++) {
      if (t[i - 1] === s[j - 1]) {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j - 1]
      } else {
        dp[i][j] = dp[i][j - 1]
      }
    }
  }

  return dp[lenT][lenS]
}

console.log(numDistinct('rabbbit', 'rabbit'))
