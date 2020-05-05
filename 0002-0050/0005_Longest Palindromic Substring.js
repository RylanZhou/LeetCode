/** ***************************
  [Description]
  Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

  [Input]
  "babad"

  [Output]
  "bab"

  [Explanation]
  "aba" is also a valid answer.
*************************** */

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  if (s.length <= 1) {
    return s;
  }
  let result = s[0];
  for (let current = 0; current < s.length; current++) {
    // If there is a result and the length is bigger than the deviation from current to the end, there's no need to do any work.
    const necessary = s.length - current > result.length;
    if (!necessary) {
      break;
    }
    // From the end to current position to find the last match character.
    let lastFront = s.lastIndexOf(s[current]);
    while (lastFront >= current) {
      let currentRear = current;
      let currentFront = lastFront;
      // Judge whether the substring from current to the finding point is palindromic.
      while (currentRear < currentFront && s[currentRear] === s[currentFront]) {
        currentRear++;
        currentFront--;
      }
      // Normally exit the while loop above.
      if (currentRear >= currentFront) {
        const thisResult = s.substring(current, lastFront + 1);
        if (thisResult.length > result.length) {
          result = thisResult;
          break;
        }
      }
      // If it is not a palindrome, get the new last but prior to the previous character.
      const substr = s.substring(0, lastFront);
      lastFront = substr.lastIndexOf(s[current]);
    }
  }
  return result;
}

function main() {
  console.log(longestPalindrome('cbbd'));
}

main();
