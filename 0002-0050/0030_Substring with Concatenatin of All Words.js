/* ***********************************************************
You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

Example 1:
Input:
  s = "barfoothefoobarman",
  words = ["foo","bar"]
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.

Example 2:
Input:
  s = "wordgoodgoodgoodbestword",
  words = ["word","good","best","word"]
Output: []
************************************************************ */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function findSubstring(s, words) {
  if (!s || !words.length) return []
  const wordLength = words[0].length
  // The length of substrings that should be examined each time
  const testLength = words.length * wordLength
  // Init
  const wordMap = {}
  for (const word of words) {
    if (wordMap[word]) {
      wordMap[word]++
    } else {
      wordMap[word] = 1
    }
  }

  const result = []
  // Main Loop
  let currentPos = 0
  while (currentPos <= s.length - testLength) {
    const currentMap = Object.assign({}, wordMap)
    let start = currentPos
    let success = true
    while (start < currentPos + testLength) {
      let testWord = s.substring(start, start + wordLength)
      if (currentMap[testWord]) {
        currentMap[testWord]--
        start += wordLength
      } else {
        success = false
        break
      }
    }
    if (success) {
      result.push(currentPos)
    }
    currentPos++
  }

  return result
}

function main() {
  console.log(findSubstring('barfoothefoobarman', ['foo', 'bar']))
}

main()
