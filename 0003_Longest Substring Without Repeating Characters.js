/** ***************************
  [Description]
  Given a string, find the length of the longest substring without repeating characters.

  [Input]
  "abcabcbb"

  [Output]
  3

  [Explanation]
  The answer is "abc" with the length of 3.
*************************** */

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const totalLength = s.length;
  if (totalLength === 0 || totalLength === 1) {
    return totalLength;
  }
  let front = 1;
  let maxCount = 1;
  let sub = s[0];
  while (front < totalLength) {
    const position = sub.indexOf(s[front]);
    sub += s[front];
    if (position === -1) {
      maxCount = Math.max(sub.length, maxCount);
    } else {
      sub = sub.substring(position + 1, sub.length);
    }
    front++;
  }
  return maxCount;
}

function main() {
  console.log(lengthOfLongestSubstring('abababa'));
}

main();
