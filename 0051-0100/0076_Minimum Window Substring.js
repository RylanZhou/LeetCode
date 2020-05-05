/* ***********************************************************
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:
Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
************************************************************ */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  const countMap = {}
  for (const char of t) {
    countMap[char] ? countMap[char]++ : (countMap[char] = 1)
  }

  let required = t.length // Initially, required number of characters need to be matched
  let min = Infinity
  let front = 0
  let rear = 0
  let start = 0 // Where the window finally starts
  while (rear <= s.length && front <= s.length) {
    if (required) {
      // Still has characters in T to be matched
      if (s[rear] in countMap) {
        countMap[s[rear]]--
        if (countMap[s[rear]] >= 0) {
          required--
        }
      }
      rear++
    } else {
      // No characters to be matched, so update minimum window length
      if (rear - front < min) {
        min = rear - front
        start = front
      }
      if (s[front] in countMap) {
        countMap[s[front]]++
        if (countMap[s[front]] > 0) {
          required++
        }
      }
      front++
    }
  }

  return min === Infinity ? '' : s.substring(start, start + min)
}

console.log(minWindow('ADOBECODEBANC', 'ABC'))
