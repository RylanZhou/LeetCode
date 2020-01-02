/* ***********************************************************
Given an array of strings, group anagrams together.

Example:
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:
All inputs will be in lowercase.
The order of your output does not matter.
************************************************************ */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  // We can also change the way to generate the key for each word. One way is to count the number of letters in a word. Eg., cat generate a1c1t1, apple becomes a1p2l1e1
  const generateKey = str => {
    const lettersCount = new Array(26).fill(0)
    for (let i = 0; i < str.length; i++) {
      lettersCount[str.charCodeAt(i) - 97]++
    }
    let key = ''
    for (let i = 0; i < 26; i++) {
      if (lettersCount[i]) {
        key += `${String.fromCharCode(i + 97)}${lettersCount[i]}`
      }
    }
    return key
  }

  const resultMap = {}
  for (const str of strs) {
    const key = generateKey(str)
    if (!resultMap[key]) {
      resultMap[key] = []
    }
    resultMap[key].push(str)
  }

  return Object.keys(resultMap).map(key => resultMap[key])
}

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagramsII(strs) {
  const resultMap = {}
  for (const str of strs) {
    const processedStr = str
      .split('')
      .sort()
      .join('')
    if (!resultMap[processedStr]) {
      resultMap[processedStr] = []
    }
    resultMap[processedStr].push(str)
  }

  return Object.keys(resultMap).map(key => resultMap[key])
}

function main() {
  console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
}

main()
