/* ***********************************************************
Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left justified and no extra space is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.

Example 1:
Input:
words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]

Example 2:
Input:
words = ["What","must","be","acknowledgment","shall","be"]
maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be",
             because the last line must be left-justified instead of fully-justified.
             Note that the second line is also left-justified because it contains only one word.

Example 3:
Input:
words = ["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"]
maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
************************************************************ */
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
function fullJustify(words, maxWidth) {
  const justify = (row = [], currentWidth, isLastLine) => {
    const len = row.length
    let remain = maxWidth - currentWidth // Extra spaces to add

    if (len < 2) {
      return row[0] + ' '.repeat(remain)
    }

    if (isLastLine) {
      // If it is the last line, there is no need to add space evenly.
      return row.join(' ') + ' '.repeat(remain)
    }

    let index = 0
    while (remain) {
      row[index] += ' '
      remain--
      index++
      index = index % (len - 1) // Do not add space on the last word
    }
    return row.join(' ')
  }

  const result = []

  for (let i = 0, len = words.length; i < len; ) {
    const currentRow = []
    let currentWidth = 0
    while (i < len && currentWidth + words[i].length <= maxWidth) {
      currentWidth += words[i].length + 1 // One space after each word
      currentRow.push(words[i])
      i++
    }
    // Justify this line, currentWidth - 1 is to get rid of the last space
    result.push(justify(currentRow, currentWidth - 1, i >= len))
  }

  return result
}

console.log(
  fullJustify(
    [
      'Science',
      'is',
      'what',
      'we',
      'understand',
      'well',
      'enough',
      'to',
      'explain',
      'to',
      'a',
      'computer.',
      'Art',
      'is',
      'everything',
      'else',
      'we',
      'do'
    ],
    20
  )
)
