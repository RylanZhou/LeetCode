/* ***********************************************************
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list.
Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.

Example 1:
Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

Example 2:
Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0
Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
************************************************************ */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function ladderLength(beginWord, endWord, wordList) {
  const len = beginWord.length // Length should be the same
  const genericMap = {} // What words share the same generic key

  for (const word of wordList) {
    for (let i = 0; i < len; i++) {
      // Replace each character with * to generate generic word
      // e.g. *ot, h*t, ho*
      const newWord = `${word.substring(0, i)}*${word.substring(i + 1)}`
      // Words with same generic word
      if (genericMap[newWord]) {
        genericMap[newWord].push(word)
      } else {
        genericMap[newWord] = [word]
      }
    }
  }

  // BFS
  const visitedMap = { [beginWord]: true }
  const queue = [beginWord]
  let count = 1
  while (queue.length) {
    const currentLevel = []
    while (queue.length) {
      const word = queue.shift()
      for (let i = 0; i < len; i++) {
        // Replace each character with * again to reach adjacent words
        const newWord = `${word.substring(0, i)}*${word.substring(i + 1)}`

        if (newWord in genericMap) {
          for (const nextWord of genericMap[newWord]) {
            // Find target
            if (nextWord === endWord) {
              return count + 1
            }
            // Not visited
            if (!visitedMap[nextWord]) {
              visitedMap[nextWord] = true
              currentLevel.push(nextWord)
            }
          }
        }
      }
    }
    queue.push(...currentLevel)
    count++
  }

  // Failing to return from the loop
  return 0
}

console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']))
