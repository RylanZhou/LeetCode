/* ***********************************************************
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given a non-empty string containing only digits, determine the total number of ways to decode it.

Example 1:
Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).

Example 2:
Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
************************************************************ */
/**
 * @param {string} s
 * @return {number}
 */
function numDecodings(s) {
  if (!s) {
    return 0
  }

  const record = new Array(s.length + 1).fill(0)
  record[0] = 1

  const dfs = (sub) => {
    const len = sub.length
    if (record[len]) {
      return record[len]
    }

    if (len > 1) {
      if (
        sub[len - 2] === '1' ||
        (sub[len - 2] === '2' && +sub[len - 1] <= 6)
      ) {
        record[len] += dfs(sub.substring(0, len - 2))
      }
    }
    if (sub[len - 1] !== '0') {
      record[len] += dfs(sub.substring(0, len - 1))
    }

    return record[len]
  }

  dfs(s)

  return record[s.length]
}

/**
 * @param {string} s
 * @return {number}
 */
function numDecodingsII(s) {
  if (!s) {
    return 0
  }

  const record = new Array(s.length + 1).fill(0)
  record[0] = 1

  for (let i = 1, len = s.length; i <= len; i++) {
    if (s[i - 1] === '0') {
      continue
    }
    const twoDigits = +s.substring(i - 1, i + 1)
    record[i] =
      twoDigits >= 10 && twoDigits <= 26
        ? record[i - 1] + record[i - 2]
        : record[i - 1]
  }

  return record[s.length]
}

console.log(numDecodingsII('226'))
