/* ***********************************************************
Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

Example 1:
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true

Example 2:
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false
************************************************************ */

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
function isInterleave(s1, s2, s3) {
  const len1 = s1.length,
    len2 = s2.length
  if (len1 + len2 !== s3.length) {
    return false
  }
  if (!len1) {
    return s2 === s3
  }
  if (!len2) {
    return s1 === s3
  }

  const dp = []
  for (let i = 0; i <= len2; i++) {
    dp.push(new Array(len1 + 1))
  }

  // dp[i][j] means whether s3[0:i+j] can be formed by s1[0:i] and s2[0:j]
  for (let i = 0; i <= len2; i++) {
    for (let j = 0; j <= len1; j++) {
      // Initialize
      if (!i && !j) {
        dp[i][j] = true
      } else if (!i) {
        dp[0][j] = dp[0][j - 1] && s1[j - 1] === s3[j - 1]
      } else if (!j) {
        dp[i][0] = dp[i - 1][0] && s2[i - 1] === s3[i - 1]
      } else {
        // Status transform
        dp[i][j] =
          (dp[i - 1][j] && s2[i - 1] === s3[i + j - 1]) ||
          (dp[i][j - 1] && s1[j - 1] === s3[i + j - 1])
      }
    }
  }

  return dp[len2][len1]
}

console.log(isInterleave('aabcc', '', 'aadbbbaccc'))
